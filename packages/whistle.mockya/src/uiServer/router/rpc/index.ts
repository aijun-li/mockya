import { mergeRouters } from '@/tools/trpc';
import type Koa from 'koa';
import { createKoaMiddleware } from 'trpc-koa-adapter';
import collectionRouter from './collection';
import ruleRouter from './rule';

const RPC_PREFIX = '/trpc';

export const trpcRouter = mergeRouters(collectionRouter, ruleRouter);

export type AppRouter = typeof trpcRouter;

export function setupRouterRPC(app: Koa) {
  const adapter = createKoaMiddleware({
    router: trpcRouter,
    prefix: RPC_PREFIX,
  });

  app.use(adapter);
}
