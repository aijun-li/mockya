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
        configs: true,
      },
    }),

  getListFull: (ruleId: number) =>
    prisma.matcher.findMany({
      where: {
        ruleId,
      },
      include: {
        mock: true,
        configs: true,
      },
    }),

  create: async ({ ruleId, mockId }: { ruleId: number; mockId: number }) =>
    prisma.matcher.create({
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
    }),

  update: async ({ id, mockId }: { id: number; mockId: number }) =>
    prisma.matcher.update({
      data: {
        mock: {
          connect: {
            id: mockId,
          },
        },
      },
      where: {
        id,
      },
    }),

  delete: (id: number) =>
    prisma.matcher.delete({
      where: {
        id,
      },
    }),
};
