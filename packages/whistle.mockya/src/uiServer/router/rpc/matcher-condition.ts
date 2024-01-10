import db from '@/db';
import { procedure, router } from '@/tools/trpc';

import { z } from 'zod';

export default router({
  getMatcherCondition: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.matcherCondition.get(id);
    return data;
  }),

  getMatcherConditionList: procedure.input(z.number()).query(async ({ input: ruleId }) => {
    const data = await db.matcher.getListFull(ruleId);
    return data;
  }),

  createMatcherCondition: procedure.input(z.number()).mutation(async ({ input: matcherId }) => {
    const data = await db.matcherCondition.create(matcherId);
    return data;
  }),

  updateMatcherCondition: procedure
    .input(
      z.object({
        id: z.number(),
        key: z.string().optional(),
        value: z.string().optional(),
      }),
    )
    .mutation(async ({ input: params }) => {
      const data = await db.matcherCondition.update(params);
      return data;
    }),

  deleteMatcherCondition: procedure.input(z.number()).mutation(async ({ input: id }) => {
    const data = await db.matcherCondition.delete(id);
    return data;
  }),
});
