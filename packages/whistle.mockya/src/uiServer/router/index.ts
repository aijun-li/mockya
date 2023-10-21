import type Koa from 'koa';
import { setupRouterHTTP } from './http';
import { setupRouterRPC } from './rpc';

function setupRouter(app: Koa) {
  setupRouterRPC(app);
  setupRouterHTTP(app);
}

export default setupRouter;
