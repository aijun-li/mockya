import db from '@/db';
import { IntStatKey } from '@/shared/types';
import { procedure, router } from '@/tools/trpc';
import { broadcastStatsChange } from '@/ws/broadcast';
import { z } from 'zod';

export default router({
  getRule: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.rule.get(id);
    return data;
  }),

  getRuleFull: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.rule.getFull(id);
    return data;
  }),

  getRuleList: procedure.input(z.string()).query(async ({ input: collectionId }) => {
    const data = await db.rule.getList(collectionId);
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

      await db.stat.updateBy(IntStatKey.CreatedRules, 1);
      broadcastStatsChange();

      return data;
    }),

  updateRule: procedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        enabled: z.boolean().optional(),
        path: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, name, enabled, path } = input;
      const data = await db.rule.update({ id, name, enabled, path });
      return data;
    }),

  deleteRule: procedure.input(z.number()).mutation(async ({ input: id }) => {
    const data = await db.rule.delete(id);
    return data;
  }),
});
