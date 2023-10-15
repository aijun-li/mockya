import db from '@/db';
import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
  try {
    const keyword = ((ctx.query.value as string) ?? '').trim().toLowerCase();

    const collections = await db.collection.getAll();
    const ids = collections.map((collection) => collection.id);

    ctx.body = ids.filter((id) => id.toLowerCase().trim().includes(keyword));
  } catch (error) {
    console.error(error);
    ctx.body = [];
  }
});

export default router;
