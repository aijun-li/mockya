import prisma from '@/tools/prisma';

export default {
  get: (id: number) =>
    prisma.matcher.findUniqueOrThrow({
      where: {
        id,
      },
    }),

  getFull: (id: number) =>
    prisma.matcher.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        mock: {
          include: {
            headers: true,
          },
        },
        conditions: true,
      },
    }),

  getListFull: (ruleId: number) =>
    prisma.matcher.findMany({
      where: {
        ruleId,
      },
      include: {
        mock: true,
        conditions: true,
      },
    }),

  create: async ({ ruleId, mockId }: { ruleId: number; mockId: number }) =>
    prisma.$transaction(async (tx) => {
      await tx.rule.update({
        where: {
          id: ruleId,
        },
        data: {
          collection: { update: { updatedAt: new Date() } },
        },
      });

      return tx.matcher.create({
        data: {
          mock: {
            connect: {
              id: mockId,
            },
          },
          rule: {
            connect: {
              id: ruleId,
            },
          },
        },
      });
    }),

  update: async ({ id, mockId, delay }: { id: number; mockId?: number; delay?: number }) =>
    prisma.matcher.update({
      data: {
        delay,
        mock:
          mockId !== undefined
            ? {
                connect: {
                  id: mockId,
                },
              }
            : undefined,
        rule: { update: { collection: { update: { updatedAt: new Date() } } } },
      },
      where: {
        id,
      },
    }),

  delete: (id: number) =>
    prisma.$transaction(async (tx) => {
      await tx.matcher.update({
        where: {
          id,
        },
        data: {
          rule: { update: { collection: { update: { updatedAt: new Date() } } } },
        },
      });

      return tx.matcher.delete({
        where: {
          id,
        },
      });
    }),
};
