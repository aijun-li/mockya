import prisma from '@/tools/prisma';

export default {
  get: (id: number) =>
    prisma.matcherCondition.findUniqueOrThrow({
      where: {
        id,
      },
    }),

  getList: (matcherId: number) =>
    prisma.matcherCondition.findMany({
      where: {
        matcherId,
      },
    }),

  create: (matcherId: number) =>
    prisma.$transaction(async (tx) => {
      await tx.matcher.update({
        where: {
          id: matcherId,
        },
        data: {
          rule: { update: { collection: { update: { updatedAt: new Date() } } } },
        },
      });

      return tx.matcherCondition.create({
        data: {
          matcher: {
            connect: {
              id: matcherId,
            },
          },
        },
      });
    }),

  update: ({ id, key, value }: { id: number; key?: string; value?: string }) =>
    prisma.matcherCondition.update({
      data: {
        key,
        value,
        matcher: { update: { rule: { update: { collection: { update: { updatedAt: new Date() } } } } } },
      },
      where: {
        id,
      },
    }),

  delete: (id: number) =>
    prisma.$transaction(async (tx) => {
      await tx.matcherCondition.update({
        where: {
          id,
        },
        data: {
          matcher: { update: { rule: { update: { collection: { update: { updatedAt: new Date() } } } } } },
        },
      });

      return tx.matcherCondition.delete({
        where: {
          id,
        },
      });
    }),
};
