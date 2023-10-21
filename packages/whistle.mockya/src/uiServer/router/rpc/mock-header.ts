import db from '@/db';
import { procedure, router } from '@/tools/trpc';
import { z } from 'zod';

export default router({
  getMockHeader: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.mockHeader.get(id);
    return data;
  }),

  createMockHeader: procedure
    .input(
      z.object({
        mockId: z.number(),
        key: z.string(),
        value: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { mockId, key, value } = input;
      const data = await db.mockHeader.create({ mockId, key, value });
      return data;
    }),

  updateMockHeader: procedure
    .input(
      z.object({
        id: z.number(),
        key: z.string().optional(),
        value: z.string().optional(),
        enabled: z.boolean().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, key, value, enabled } = input;
      const data = await db.mockHeader.update({ id, key, value, enabled });
      return data;
    }),

  deleteMockHeader: procedure.input(z.number()).mutation(async ({ input: id }) => {
    const data = await db.mockHeader.delete(id);
    return data;
  }),
});
