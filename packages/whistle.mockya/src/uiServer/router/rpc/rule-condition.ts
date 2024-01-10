import db from '@/db';
import { procedure, router } from '@/tools/trpc';
import { z } from 'zod';

export default router({
  getRuleCondition: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.ruleCondition.get(id);
    return data;
  }),

  getRuleConditionList: procedure.input(z.number()).query(async ({ input: ruleId }) => {
    const data = await db.ruleCondition.getList(ruleId);
    return data;
  }),

  createRuleCondition: procedure.input(z.number()).mutation(async ({ input: ruleId }) => {
    const data = await db.ruleCondition.create(ruleId);
    return data;
  }),

  updateRuleCondition: procedure
    .input(
      z.object({
        id: z.number(),
        key: z.string().optional(),
        value: z.string().optional(),
      }),
    )
    .mutation(async ({ input: params }) => {
      const data = await db.ruleCondition.update(params);
      return data;
    }),

  deleteRuleCondition: procedure.input(z.number()).mutation(async ({ input: id }) => {
    const data = await db.ruleCondition.delete(id);
    return data;
  }),
});
