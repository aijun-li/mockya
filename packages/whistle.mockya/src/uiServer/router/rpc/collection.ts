import db from '@/db';
import { IntStatKey } from '@/shared/types';
import { procedure, router } from '@/tools/trpc';
import { broadcastStatsChange } from '@/ws/broadcast';
import { z } from 'zod';

export default router({
  getCollection: procedure.input(z.string()).query(async ({ input: id }) => {
    const data = await db.collection.get(id);
    return data;
  }),

  getCollectionFull: procedure.input(z.string()).query(async ({ input: id }) => {
    const data = await db.collection.getFull(id);
    return data;
  }),

  getAllCollections: procedure.query(async () => {
    const data = await db.collection.getAll();
    return data;
  }),

  getAllCollectionsFull: procedure.query(async () => {
    const data = await db.collection.getAllFull();
    return data;
  }),

  upsertCollection: procedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, name } = input;

      const exist = await db.collection.checkExist(id);
      const data = await db.collection.upsert({ id, name });

      if (!exist) {
        await db.stat.updateBy(IntStatKey.CreatedCollections, 1);
        broadcastStatsChange();
      }

      return data;
    }),

  deleteCollection: procedure.input(z.string()).mutation(async ({ input: id }) => {
    const data = await db.collection.delete(id);
    return data;
  }),
});
