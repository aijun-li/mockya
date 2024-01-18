import JSON5 from 'json5';
import Mock from 'mockjs';
import sizeof from 'object-sizeof';
import winston from 'winston';
import db from './db';
import baseLogger from './logger';
import { IntStatKey } from './shared/types';
import { JSONValue, MatchCandidate, OriginalReq } from './types';
import { broadcastStatsChange, broadcastTrafficChange } from './ws/broadcast';

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

/**
 * deal with custom field command
 */
function fieldCommandReviver(this: any, key: string, value: any) {
  const matchRes = key.match(/^(.+)>(.+)$/i);
  if (matchRes) {
    const realKey = matchRes[1];
    const command = matchRes[2].trim().toLowerCase();
    switch (command) {
      case 'encode':
        this[realKey] = JSON.stringify(value);
        return undefined;
      default:
        return value;
    }
  } else {
    return value;
  }
}

function validateJSON5(code: string): JSONValue | undefined {
  try {
    // deal with Mock.js first
    const mockedCode = JSON.stringify(Mock.mock(JSON5.parse(code)));
    const data = JSON5.parse(mockedCode, fieldCommandReviver);
    return data;
  } catch (error) {
    return undefined;
  }
}

function getReqTime(req: Whistle.PluginServerRequest) {
  return new Promise<number>((resolve) => {
    req.getReqSession((session) => {
      if (typeof session === 'string') {
        resolve(0);
      } else {
        resolve(session.requestTime);
      }
    });
  });
}

function getRespBody(req: Whistle.PluginServerRequest) {
  return new Promise<string | undefined>((resolve) => {
    req.getSession((result) => {
      if (typeof result === 'string' || !result.res.body) {
        resolve(undefined);
      } else {
        resolve(result.res.body);
      }
    });
  });
}

async function getBodyEntries(req: Whistle.PluginServerRequest) {
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
  const { conditionCount: aConditionCount, pathLength: aPathLength, isDefault: aIsDefault, createdAt: aCreatedAt } = a;
  const { conditionCount: bConditionCount, pathLength: bPathLength, isDefault: bIsDefault, createdAt: bCreatedAt } = b;

  if (aConditionCount !== bConditionCount) {
    return bConditionCount - aConditionCount;
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

    const reqTime = await getReqTime(req);

    const url = new URL(req.originalReq.url);
    const path = url.pathname.trim();

    const queryEntries = Array.from(url.searchParams.entries());
    const bodyEntries = await getBodyEntries(req);
    const fullEntries = [...queryEntries, ...bodyEntries];

    logger.info(`query: ${JSON.stringify(queryEntries)}`);
    logger.info(`body: ${JSON.stringify(bodyEntries)}`);

    const availableRules = rules.filter(
      (rule) =>
        rule.enabled &&
        path.includes(rule.path.trim()) &&
        rule.conditions
          .filter((condition) => condition.key.trim() && condition.value.trim())
          .every((condition) =>
            fullEntries.some(
              ([key, value]) => key.trim() === condition.key.trim() && value.trim() === condition.value.trim(),
            ),
          ),
    );

    const candidates = availableRules
      .reduce((arr, rule) => {
        const pathLength = rule.path.trim().length;
        const ruleConditionsLength = rule.conditions.filter(
          (condition) => condition.key.trim() && condition.value.trim(),
        ).length;

        rule.matchers.forEach((matcher) => {
          if (matcher.default) {
            const mockBody = validateJSON5(matcher.mock.body);
            // fallback mock only works when configured path is not empty or have valid rule conditions
            if (mockBody !== undefined && (pathLength || ruleConditionsLength)) {
              arr.push({
                conditionCount: 0 + ruleConditionsLength,
                pathLength,
                isDefault: 1,
                createdAt: new Date(matcher.createdAt).valueOf(),

                delay: matcher.delay,
                collectionId: collection?.id ?? '',
                collectionName: collection?.name ?? '',
                ruleId: rule.id,
                ruleName: rule.name,
                mockId: matcher.mock.id,
                mockName: matcher.mock.name,
                body: mockBody,
                matcherId: matcher.id,
              });
            }
          } else {
            const availableConditions = matcher.conditions.filter(
              (condition) => condition.key.trim() && condition.value.trim(),
            );

            const matchAllConditions = availableConditions.every((condition) =>
              fullEntries.some(
                ([key, value]) => key.trim() === condition.key.trim() && value.trim() === condition.value.trim(),
              ),
            );

            if (matchAllConditions) {
              const mockBody = validateJSON5(matcher.mock.body);
              if (mockBody !== undefined) {
                arr.push({
                  conditionCount: availableConditions.length + ruleConditionsLength,
                  pathLength,
                  isDefault: 0,
                  createdAt: new Date(matcher.createdAt).valueOf(),

                  delay: matcher.delay,
                  collectionId: collection?.id ?? '',
                  collectionName: collection?.name ?? '',
                  ruleId: rule.id,
                  ruleName: rule.name,
                  mockId: matcher.mock.id,
                  mockName: matcher.mock.name,
                  body: mockBody,
                  matcherId: matcher.id,
                });
              }
            }
          }
        });

        return arr;
      }, [] as MatchCandidate[])
      .sort(matchCandidateCompareFn);

    const returnCandidate = candidates[0] as MatchCandidate | undefined;
    const returnData = returnCandidate?.body;
    const delay = returnCandidate?.delay;

    const baseTrafficItem = {
      id: oReq.id,
      url: oReq.url,
      path,
      queryEntries,
      bodyEntries,
      time: reqTime,
    };

    if (returnData !== undefined) {
      const broadcastData = {
        ...baseTrafficItem,
        match: true,
        matchData: {
          collectionId: collection!.id,
          collectionName: collection!.name,
          ruleId: returnCandidate!.ruleId,
          ruleName: returnCandidate!.ruleName,
          mockId: returnCandidate!.mockId,
          mockName: returnCandidate!.mockName,
          delay: delay ?? 0,
        },
      };
      if (delay) {
        broadcastTrafficChange(broadcastData);
        await sleep(delay * 1000);
      }

      const finalData = JSON.stringify(returnData);

      res.setHeader('mockya', '1');
      res.setHeader('Content-Type', 'application/json; charset=UTF-8');
      res.end(finalData);
      logger.info(`match: ${collection?.id}/${returnCandidate?.ruleId}/${returnCandidate?.matcherId}`);
      logger.info('mock: true');

      broadcastTrafficChange({
        ...broadcastData,
        complete: true,
        resp: finalData,
      });

      await Promise.all([
        db.stat.updateBy(IntStatKey.MockTimes, 1),
        db.stat.updateBy(IntStatKey.MockDataSize, sizeof(returnData)),
      ]);
      broadcastStatsChange();
    } else {
      const broadcastData = {
        ...baseTrafficItem,
        match: false,
      };
      broadcastTrafficChange(broadcastData);

      getRespBody(req).then((resp) => {
        broadcastTrafficChange({
          ...broadcastData,
          complete: true,
          resp,
        });
      });

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
