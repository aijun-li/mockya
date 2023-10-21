import db from '@/db';
import { procedure, router } from '@/tools/trpc';
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
      const data = await db.collection.upsert({ id, name });
      return data;
    }),

  deleteCollection: procedure.input(z.string()).mutation(async ({ input: id }) => {
    const data = await db.collection.delete(id);
    return data;
  }),
});
