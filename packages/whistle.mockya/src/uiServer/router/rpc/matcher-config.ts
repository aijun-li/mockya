import db from '@/db';
import { procedure, router } from '@/tools/trpc';

import { z } from 'zod';

export default router({
  getMatcherConfig: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.matcherConfig.get(id);
    return data;
  }),

  getMatcherConfigList: procedure.input(z.number()).query(async ({ input: ruleId }) => {
    const data = await db.matcher.getListFull(ruleId);
    return data;
  }),

  createMatcherConfig: procedure.input(z.number()).mutation(async ({ input: matcherId }) => {
    const data = await db.matcherConfig.create(matcherId);
    return data;
  }),

  updateMatcherConfig: procedure
    .input(
      z.object({
        id: z.number(),
        key: z.string().optional(),
        value: z.string().optional(),
      }),
    )
    .mutation(async ({ input: params }) => {
      const data = await db.matcherConfig.update(params);
      return data;
    }),

  deleteMatcherConfig: procedure.input(z.number()).mutation(async ({ input: id }) => {
    const data = await db.matcherConfig.delete(id);
    return data;
  }),
});
