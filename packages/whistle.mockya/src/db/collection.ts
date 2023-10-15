import prisma from '@/tools/prisma';

export default {
  get: (id: string) => {
    return prisma.collection.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        rules: true,
      },
    });
  },

  getAll: () => {
    return prisma.collection.findMany();
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
      include: {
        rules: true,
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
