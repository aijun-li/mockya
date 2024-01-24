import db from '@/db';
import { procedure, router } from '@/tools/trpc';
import { z } from 'zod';

export default router({
  getCollection: procedure
    .input(
      z.object({
        id: z.string(),
        userId: z.string(),
      }),
    )
    .query(async ({ input: params }) => {
      const data = await db.collection.get(params);
      return data;
    }),

  getAllCollections: procedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input: params }) => {
      const data = await db.collection.getAll(params);
      return data;
    }),

  upsertCollection: procedure
    .input(
      z.object({
        id: z.string(),
        userId: z.string(),
        name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const data = await db.collection.upsert(input);
      return data;
    }),

  deleteCollection: procedure
    .input(
      z.object({
        id: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const data = await db.collection.delete(input);
      return data;
    }),
});
