import { mergeRouters } from '@/tools/trpc';
import type Koa from 'koa';
import { createKoaMiddleware } from 'trpc-koa-adapter';
import collectionRouter from './collection';
import ruleRouter from './rule';
import mockRouter from './mock';
import mockHeaderRouter from './mock-header';
import matcherRouter from './matcher';
import matcherConfigRouter from './matcher-config';

const RPC_PREFIX = '/trpc';

export const trpcRouter = mergeRouters(
  collectionRouter,
  ruleRouter,
  mockRouter,
  mockHeaderRouter,
  matcherRouter,
  matcherConfigRouter,
);

export type AppRouter = typeof trpcRouter;

export function setupRouterRPC(app: Koa) {
  const adapter = createKoaMiddleware({
    router: trpcRouter,
    prefix: RPC_PREFIX,
  });

  app.use(adapter);
}
