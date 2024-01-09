import db from '@/db';
import { procedure, router } from '@/tools/trpc';
import { z } from 'zod';

export default router({
  getMock: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.mock.get(id);
    return data;
  }),

  getMockFull: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.mock.getFull(id);
    return data;
  }),

  getMockList: procedure.input(z.number()).query(async ({ input: id }) => {
    const data = await db.mock.getList(id);
    return data;
  }),

  createMock: procedure
    .input(
      z.object({
        name: z.string(),
        ruleId: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      const { name, ruleId } = input;
      const data = await db.mock.create({ name, ruleId });
      return data;
    }),

  updateMock: procedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        body: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, name, body } = input;

      const target = await db.mock.get(id);
      if (target.default && name) {
        throw new Error(`Default mock's name cannot be changed!`);
      }

      const data = await db.mock.update({ id, name, body });
      return data;
    }),

  deleteMock: procedure.input(z.number()).mutation(async ({ input: id }) => {
    const target = await db.mock.get(id);
    if (target.default) {
      throw new Error('Default mock cannot be deleted!');
    }

    const data = await db.mock.delete(id);
    return data;
  }),
});
