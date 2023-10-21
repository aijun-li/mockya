import prisma from '@/tools/prisma';

const fullIncludeConfig = {
  mocks: {
    include: {
      headers: true,
    },
  },
  matchers: {
    include: {
      mock: {
        include: {
          headers: true,
        },
      },
      configs: true,
    },
  },
};

export default {
  get: (id: number) => {
    return prisma.rule.findUniqueOrThrow({
      where: {
        id,
      },
    });
  },

  getFull: (id: number) => {
    return prisma.rule.findUniqueOrThrow({
      where: {
        id,
      },
      include: fullIncludeConfig,
    });
  },

  getList: (collectionId: string) => {
    return prisma.rule.findMany({
      where: {
        collectionId,
      },
    });
  },

  create: async ({ name, collectionId }: { name: string; collectionId: string }) => {
    const rule = await prisma.rule.create({
      data: {
        name,
        collection: {
          connect: {
            id: collectionId,
          },
        },
      },
    });

    const mock = await prisma.mock.create({
      data: {
        default: true,
        name: 'Default',
        rule: {
          connect: {
            id: rule.id,
          },
        },
      },
    });

    await prisma.matcher.create({
      data: {
        default: true,
        rule: {
          connect: {
            id: rule.id,
          },
        },
        mock: {
          connect: {
            id: mock.id,
          },
        },
      },
    });

    return prisma.rule.findUniqueOrThrow({
      where: {
        id: rule.id,
      },
      include: {
        mocks: true,
        matchers: {
          include: {
            mock: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  },

  update: ({ id, name, enabled, path }: { id: number; name?: string; enabled?: boolean; path?: string }) => {
    return prisma.rule.update({
      data: {
        name,
        enabled,
        path,
      },
      where: {
        id,
      },
    });
  },

  delete: (id: number) => {
    return prisma.rule.delete({
      where: {
        id,
      },
    });
  },

  syncUpdatedAt: (id: number) => {
    return prisma.rule.update({
      data: {
        updatedAt: new Date(),
      },
      where: {
        id,
      },
    });
  },
};
