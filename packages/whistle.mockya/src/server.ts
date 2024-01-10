import JSON5 from 'json5';
import Mock from 'mockjs';
import winston from 'winston';
import db from './db';
import baseLogger from './logger';
import { JSONValue, MatchCandidate, OriginalReq } from './types';

function sleep(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
}

function handleError(error: unknown, logger?: winston.Logger) {
  console.error(error);
  logger?.error(JSON.stringify(error, null, 2));
}

async function getTargetCollection(oReq: OriginalReq, logger: winston.Logger) {
  try {
    const collectionId = oReq.ruleValue;
    const collection = await db.collection.getFullWithoutMocks(collectionId);
    return collection;
  } catch (error) {
    handleError(error, logger);
    return null;
  }
}

function validateJSON5(code: string): JSONValue | undefined {
  try {
    const data = JSON5.parse(code);
    return data;
  } catch (error) {
    return undefined;
  }
}

async function getBodyEntries(req: Whistle.PluginServerRequest, logger: winston.Logger) {
  const rawBody: string = await new Promise((resolve) => {
    req.getReqSession((result) => {
      if (typeof result === 'string') {
        resolve('{}');
      } else {
        resolve(result.req.body || '{}');
      }
    });
  });

  const contentType = req.headers['content-type']?.split(';')[0]?.toLowerCase() ?? '';

  if (contentType === 'application/x-www-form-urlencoded') {
    return rawBody.split('&').reduce(
      (prev, curr) => {
        const entry = curr?.split('=') ?? [];
        if (entry[0] && entry[1]) {
          prev.push([decodeURIComponent(entry[0]), decodeURIComponent(entry[1])]);
        }
        return prev;
      },
      [] as [string, string][],
    );
  } else {
    const data = validateJSON5(rawBody);
    return data && typeof data === 'object'
      ? Object.entries(data).map(([key, value]) => [key, typeof value === 'string' ? value : JSON.stringify(value)])
      : [];
  }
}

function matchCandidateCompareFn(a: MatchCandidate, b: MatchCandidate) {
  const [aConfigCount, aPathLength, aIsDefault, aCreatedAt] = a;
  const [bConfigCount, bPathLength, bIsDefault, bCreatedAt] = b;

  if (aConfigCount !== bConfigCount) {
    return bConfigCount - aConfigCount;
  } else if (aPathLength !== bPathLength) {
    return bPathLength - aPathLength;
  } else if (aIsDefault !== bIsDefault) {
    return aIsDefault - bIsDefault;
  } else {
    return aCreatedAt - bCreatedAt;
  }
}

export default (server: Whistle.PluginServer, options: Whistle.PluginOptions) => {
  // handle http request
  server.on('request', async (req: Whistle.PluginServerRequest, res: Whistle.PluginServerResponse) => {
    const oReq = req.originalReq;

    const logger = baseLogger.child({
      reqId: oReq.id,
    });

    logger.info(`url: ${oReq.url}`);

    const collection = await getTargetCollection(oReq, logger);
    const rules = collection?.rules ?? [];

    if (collection) {
      logger.info(`collection: ${collection.name} (#${collection.id})`);
    } else {
      logger.info(`collection: none`);
    }

    const url = new URL(req.originalReq.url);
    const path = url.pathname.trim();

    const queryEntries = Array.from(url.searchParams.entries());
    const bodyEntries = await getBodyEntries(req, logger);
    const fullEntries = [...queryEntries, ...bodyEntries];

    logger.info(`query: ${JSON.stringify(queryEntries)}`);
    logger.info(`body: ${JSON.stringify(bodyEntries)}`);

    const availableRules = rules.filter((rule) => rule.enabled && path.includes(rule.path.trim()));

    const candidates = availableRules
      .reduce((arr, rule) => {
        const pathLength = rule.path.trim().length;

        rule.matchers.forEach((matcher) => {
          if (matcher.default) {
            const mockBody = validateJSON5(matcher.mock.body);
            // fallback mock only works when configured path is not empty
            if (mockBody !== undefined && pathLength) {
              arr.push([
                0,
                pathLength,
                1,
                new Date(matcher.createdAt).valueOf(),
                mockBody,
                rule.id,
                matcher.id,
                matcher.delay,
              ]);
            }
          } else {
            const availableConfigs = matcher.configs.filter((config) => config.key.trim() && config.value.trim());

            const matchAllConfigs = availableConfigs.every((config) =>
              fullEntries.some(
                ([key, value]) => key.trim() === config.key.trim() && value.trim() === config.value.trim(),
              ),
            );

            if (matchAllConfigs) {
              const mockBody = validateJSON5(matcher.mock.body);
              if (mockBody !== undefined) {
                arr.push([
                  availableConfigs.length,
                  pathLength,
                  0,
                  new Date(matcher.createdAt).valueOf(),
                  mockBody,
                  rule.id,
                  matcher.id,
                  matcher.delay,
                ]);
              }
            }
          }
        });

        return arr;
      }, [] as MatchCandidate[])
      .sort(matchCandidateCompareFn);

    const returnCandidate: MatchCandidate = candidates[0];
    const returnData = returnCandidate?.[4];
    const delay = returnCandidate?.[7];

    if (returnData !== undefined) {
      if (delay) {
        await sleep(delay * 1000);
      }
      res.setHeader('mockya', '1');
      res.setHeader('Content-Type', 'application/json; charset=UTF-8');
      res.end(JSON.stringify(Mock.mock(returnData)));
      logger.info(`match: ${collection?.id}/${returnCandidate[5]}/${returnCandidate[6]}`);
      logger.info('mock: true');
    } else {
      req.passThrough();
      logger.info('mock: false');
    }
  });

  // handle websocket request
  server.on('upgrade', (req: Whistle.PluginServerRequest, socket: Whistle.PluginServerSocket) => {
    // do something
    req.passThrough();
  });

  // handle tunnel request
  server.on('connect', (req: Whistle.PluginServerRequest, socket: Whistle.PluginServerSocket) => {
    // do something
    req.passThrough();
  });
};
