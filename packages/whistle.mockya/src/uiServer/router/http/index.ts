import type Koa from 'koa';
import Router from 'koa-router';
import hintRouter from './hint';
import bodyParser from 'koa-bodyparser';

const HTTP_PREFIX = '/api';

export function setupRouterHTTP(app: Koa) {
  const router = new Router({ prefix: HTTP_PREFIX });

  router.use('/hint', hintRouter.routes());

  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());
}
