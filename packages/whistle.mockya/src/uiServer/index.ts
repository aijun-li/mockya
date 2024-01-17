import cors from '@koa/cors';
import fs from 'fs';
import Koa from 'koa';
import onerror from 'koa-onerror';
import serve from 'koa-static';
import path from 'path';
import setupRouter from './router';
import { initWebSocket } from '@/ws';

const MAX_AGE = 1000 * 60 * 5;

export default (server: Whistle.PluginServer, options: Whistle.PluginOptions) => {
  const app = new Koa();

  app.proxy = true;
  app.silent = true;
  onerror(app);

  app.use(
    cors({
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    }),
  );

  app.use(async (ctx, next) => {
    await next();
    if (ctx.response.status === 404) {
      ctx.type = 'text/html; charset=utf-8';
      ctx.body = fs.readFileSync(path.join(__dirname, '../../public/index.html'));
    }
  });

  setupRouter(app);

  app.use(serve(path.join(__dirname, '../../public'), { maxage: MAX_AGE }));

  server.on('request', app.callback());

  initWebSocket(server);
};
