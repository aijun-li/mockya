import prisma from '@/tools/prisma';

export default {
  get: (id: number) => {
    return prisma.rule.findUnique({
      where: {
        id,
      },
    });
  },

  create: ({ name, collectionId }: { name: string; collectionId: string }) => {
    return prisma.rule.create({
      data: {
        name,
        collection: {
          connect: {
            id: collectionId,
          },
        },
      },
    });
  },

  update: ({ id, name }: { id: number; name: string }) => {
    return prisma.rule.update({
      data: {
        name,
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
