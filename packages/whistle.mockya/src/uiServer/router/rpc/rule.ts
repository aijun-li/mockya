import db from '@/db';
import { procedure, router } from '@/tools/trpc';
import { z } from 'zod';

export default router({
  getRule: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.rule.get(id);
    return data;
  }),

  createRule: procedure
    .input(
      z.object({
        name: z.string(),
        collectionId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { name, collectionId } = input;
      const data = await db.rule.create({ name, collectionId });
      return data;
    }),

  updateRule: procedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, name } = input;
      const data = await db.rule.update({ id, name });
      return data;
    }),

  deleteRule: procedure.input(z.number()).mutation(async ({ input: id }) => {
    const data = await db.rule.delete(id);
    return data;
  }),
});
