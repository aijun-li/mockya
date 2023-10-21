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
          mock: true,
          configs: true,
        },
      },
    },
  },
};

export default {
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

  syncUpdatedAt: (id: string) => {
    return prisma.collection.update({
      data: {
        updatedAt: new Date(),
      },
      where: {
        id,
      },
    });
  },
};
