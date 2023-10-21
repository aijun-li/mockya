import prisma from '@/tools/prisma';

export default {
  get: (id: number) =>
    prisma.mock.findUniqueOrThrow({
      where: {
        id,
      },
    }),

  getFull: (id: number) =>
    prisma.mock.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        headers: true,
      },
    }),

  getDefault: (ruleId: number) =>
    prisma.mock.findFirstOrThrow({
      where: {
        ruleId,
        default: true,
      },
    }),

  getList: (ruleId: number) =>
    prisma.mock.findMany({
      where: {
        ruleId,
      },
    }),

  create: ({ name, ruleId }: { name: string; ruleId: number }) =>
    prisma.mock.create({
      data: {
        name,
        ruleId,
      },
    }),

  update: ({ id, name, body }: { id: number; name?: string; body?: string }) =>
    prisma.mock.update({
      data: {
        name,
        body,
      },
      where: {
        id,
      },
    }),

  delete: async (id: number) => {
    const target = await prisma.mock.findUniqueOrThrow({
      where: {
        id,
      },
    });

    const defaultMock = await prisma.mock.findFirstOrThrow({
      where: {
        ruleId: target.ruleId,
        default: true,
      },
    });

    const relatedMatchers = await prisma.matcher.findMany({
      where: {
        mockId: id,
      },
    });

    await prisma.$transaction([
      ...relatedMatchers.map((matcher) =>
        prisma.matcher.update({
          where: {
            id: matcher.id,
          },
          data: {
            mock: {
              connect: {
                id: defaultMock.id,
              },
            },
          },
        }),
      ),
      prisma.mock.delete({
        where: {
          id,
        },
      }),
    ]);
  },
};
