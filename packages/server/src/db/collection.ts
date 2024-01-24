import prisma from '@/tools/prisma';

export default {
  get: ({ id, userId }: { userId: string; id: string }) =>
    prisma.collection.findUniqueOrThrow({
      where: {
        id_userId: {
          id,
          userId,
        },
      },
    }),

  getAll: ({ userId }: { userId: string }) =>
    prisma.collection.findMany({
      where: {
        userId,
      },
    }),

  upsert: ({ id, userId, name }: { id: string; userId: string; name: string }) =>
    prisma.collection.upsert({
      where: {
        id_userId: {
          id,
          userId,
        },
      },
      create: {
        id,
        userId,
        name,
      },
      update: {
        name,
      },
    }),

  delete: ({ id, userId }: { id: string; userId: string }) =>
    prisma.collection.delete({
      where: {
        id_userId: {
          id,
          userId,
        },
      },
    }),
};
