import prisma from '@/tools/prisma';

const fullIncludeConfig = {
  conditions: true,
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
      conditions: true,
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

  create: ({ name, collectionId }: { name: string; collectionId: string }) =>
    prisma.$transaction(async (tx) => {
      const rule = await tx.rule.create({
        data: {
          name,
          collection: {
            connect: {
              id: collectionId,
            },
          },
        },
      });

      const mock = await tx.mock.create({
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

      await tx.matcher.create({
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

      await tx.collection.update({
        where: {
          id: collectionId,
        },
        data: {
          updatedAt: new Date(),
        },
      });

      return tx.rule.findUniqueOrThrow({
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
    }),

  update: ({ id, name, enabled, path }: { id: number; name?: string; enabled?: boolean; path?: string }) => {
    return prisma.rule.update({
      data: {
        name,
        enabled,
        path,
        collection: { update: { updatedAt: new Date() } },
      },
      where: {
        id,
      },
    });
  },

  delete: (id: number) => {
    return prisma.$transaction(async (tx) => {
      await tx.rule.update({
        where: {
          id,
        },
        data: {
          collection: { update: { updatedAt: new Date() } },
        },
      });

      return tx.rule.delete({
        where: {
          id,
        },
      });
    });
  },
};
