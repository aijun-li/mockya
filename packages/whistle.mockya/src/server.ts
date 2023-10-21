import JSON5 from 'json5';
import Mock from 'mockjs';
import db from './db';
import { JSONValue, OriginalReq } from './types';

function handleError(error: unknown) {
  console.error(error);
}

async function getTargetCollection(oReq: OriginalReq) {
  try {
    const collectionId = oReq.ruleValue;
    const collection = await db.collection.getFullWithoutMocks(collectionId);
    return collection;
  } catch (error) {
    handleError(error);
    return null;
  }
}

function validateJSON5(code: string): JSONValue | undefined {
  try {
    const data = JSON5.parse(code);
    return data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
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

export default (server: Whistle.PluginServer, options: Whistle.PluginOptions) => {
  // handle http request
  server.on('request', async (req: Whistle.PluginServerRequest, res: Whistle.PluginServerResponse) => {
    let returnData: JSONValue | undefined = undefined;

    const oReq = req.originalReq;

    const collection = await getTargetCollection(oReq);
    const rules = collection?.rules ?? [];

    const url = new URL(req.originalReq.url);
    const path = url.pathname.trim();

    const queryEntries = Array.from(url.searchParams.entries());
    const bodyEntries = await getBodyEntries(req);
    const fullEntries = [...queryEntries, ...bodyEntries];

    const targetRule = rules.filter((rule) => rule.enabled).find((rule) => rule.path.trim().includes(path));

    if (targetRule) {
      const { matchers } = targetRule;

      let defaultMock: JSONValue | undefined = undefined;
      let matchMock: JSONValue | undefined = undefined;

      const matchCandidates: [body: JSONValue, matchCount: number, createTime: number][] = [];

      for (const matcher of matchers) {
        if (matcher.default) {
          defaultMock = validateJSON5(matcher.mock.body);
        } else {
          const availableConfigs = matcher.configs.filter((config) => config.key.trim() && config.value.trim());

          const matchAllConfigs = availableConfigs.every((config) =>
            fullEntries.some(
              ([key, value]) =>
                key.trim().toLowerCase() === config.key.trim().toLowerCase() &&
                value.trim().toLowerCase() === config.value.trim().toLowerCase(),
            ),
          );

          if (matchAllConfigs) {
            const mockBody = validateJSON5(matcher.mock.body);

            if (mockBody !== undefined) {
              matchCandidates.push([mockBody, availableConfigs.length, new Date(matcher.createdAt).valueOf()]);
            }
          }
        }
      }

      // sort by  1. match configs count  2. create time
      matchCandidates.sort((a, b) => (a[1] > b[1] ? -1 : a[1] === b[1] ? a[2] - b[2] : 1));

      matchMock = matchCandidates[0]?.[0];

      returnData = matchMock || defaultMock;
    }

    if (returnData !== undefined) {
      res.setHeader('mockya', '1');
      res.setHeader('Content-Type', 'application/json; charset=UTF-8');
      res.end(JSON.stringify(Mock.mock(returnData)));
    } else {
      req.passThrough();
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
