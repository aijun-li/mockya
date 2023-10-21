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
    prisma.matcherConfig.create({
      data: {
        matcher: {
          connect: {
            id: matcherId,
          },
        },
      },
    }),

  update: ({ id, key, value }: { id: number; key?: string; value?: string }) =>
    prisma.matcherConfig.update({
      data: {
        key,
        value,
      },
      where: {
        id,
      },
    }),

  delete: (id: number) =>
    prisma.matcherConfig.delete({
      where: {
        id,
      },
    }),
};
