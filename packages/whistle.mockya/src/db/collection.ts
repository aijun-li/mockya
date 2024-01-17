import prisma from '@/tools/prisma';

const fullIncludeConfig = {
  rules: {
    include: {
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
    },
  },
};

export default {
  checkExist: async (id: string) => {
    const extant = await prisma.collection.findUnique({
      where: { id },
    });
    return Boolean(extant);
  },

  get: (id: string) => {
    return prisma.collection.findUniqueOrThrow({
      where: {
        id,
      },
    });
  },

  getFull: (id: string) => {
    return prisma.collection.findUniqueOrThrow({
      where: {
        id,
      },
      include: fullIncludeConfig,
    });
  },

  getFullWithoutMocks: (id: string) => {
    return prisma.collection.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        rules: {
          include: {
            conditions: true,
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
          },
        },
      },
    });
  },

  getAll: () => {
    return prisma.collection.findMany();
  },

  getAllFull: () => {
    return prisma.collection.findMany({
      include: fullIncludeConfig,
    });
  },

  upsert: ({ id, name }: { id: string; name: string }) => {
    return prisma.collection.upsert({
      create: {
        id,
        name,
      },
      update: {
        name,
      },
      where: {
        id,
      },
    });
  },

  delete: (id: string) => {
    return prisma.collection.delete({
      where: {
        id,
      },
    });
  },
};
