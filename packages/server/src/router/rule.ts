import db from '@/db';
import { procedure, router } from '@/tools/trpc';
import { z } from 'zod';

export default router({
  getRuleFull: procedure
    .input(
      z.object({
        id: z.number(),
        userId: z.string(),
      }),
    )
    .query(async ({ input: params }) => {
      const data = await db.rule.getFull(params);
      return data;
    }),

  getRuleList: procedure
    .input(
      z.object({
        collectionId: z.string(),
        userId: z.string(),
      }),
    )
    .query(async ({ input: params }) => {
      const data = await db.rule.getList(params);
      return data;
    }),

  createRule: procedure
    .input(
      z.object({
        id: z.number(),
        userId: z.string(),
        collectionId: z.string(),
        name: z.string(),
      }),
    )
    .mutation(async ({ input: params }) => {
      const data = await db.rule.upsert(params);
      return data;
    }),

  updateRule: procedure
    .input(
      z.object({
        id: z.number(),
        userId: z.string(),
        name: z.string().optional(),
        enabled: z.boolean().optional(),
        path: z.string().optional(),
      }),
    )
    .mutation(async ({ input: params }) => {
      const data = await db.rule.upsert(params);
      return data;
    }),

  deleteRule: procedure
    .input(
      z.object({
        id: z.number(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input: params }) => {
      const data = await db.rule.delete(params);
      return data;
    }),
});
