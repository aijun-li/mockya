import db from '@/db';
import { procedure, router } from '@/tools/trpc';

import { z } from 'zod';

export default router({
  getMatcher: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.matcher.get(id);
    return data;
  }),

  getMatcherFull: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.matcher.getFull(id);
    return data;
  }),

  getMatcherListFull: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.matcher.getListFull(id);
    return data;
  }),

  createMatcher: procedure.input(z.number()).mutation(async ({ input: ruleId }) => {
    const defaultMock = await db.mock.getDefault(ruleId);
    const matcher = await db.matcher.create({
      ruleId,
      mockId: defaultMock.id,
    });
    await db.matcherCondition.create(matcher.id);
    const data = await db.matcher.getFull(matcher.id);
    return data;
  }),

  updateMatcher: procedure
    .input(
      z.object({
        id: z.number(),
        mockId: z.number().optional(),
        delay: z.number().optional(),
      }),
    )
    .mutation(async ({ input: params }) => {
      const data = await db.matcher.update(params);
      return data;
    }),

  deleteMatcher: procedure.input(z.number()).mutation(async ({ input: id }) => {
    const target = await db.matcher.get(id);
    if (target.default) {
      throw new Error('Default matcher cannot be deleted!');
    }

    const data = await db.matcher.delete(id);
    return data;
  }),
});
