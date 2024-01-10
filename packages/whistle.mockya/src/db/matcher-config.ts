import prisma from '@/tools/prisma';

export default {
  get: (id: number) =>
    prisma.matcherConfig.findUniqueOrThrow({
      where: {
        id,
      },
    }),

  getList: (matcherId: number) =>
    prisma.matcherConfig.findMany({
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

      return tx.matcherConfig.create({
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
    prisma.matcherConfig.update({
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
      await tx.matcherConfig.update({
        where: {
          id,
        },
        data: {
          matcher: { update: { rule: { update: { collection: { update: { updatedAt: new Date() } } } } } },
        },
      });

      return tx.matcherConfig.delete({
        where: {
          id,
        },
      });
    }),
};
