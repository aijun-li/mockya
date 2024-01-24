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
  get: ({ id, userId }: { id: number; userId: string }) =>
    prisma.rule.findUniqueOrThrow({
      where: {
        id_userId: {
          id,
          userId,
        },
      },
    }),

  getFull: ({ id, userId }: { id: number; userId: string }) =>
    prisma.rule.findUniqueOrThrow({
      where: {
        id_userId: {
          id,
          userId,
        },
      },
      include: fullIncludeConfig,
    }),

  getList: ({ userId, collectionId }: { userId: string; collectionId: string }) =>
    prisma.rule.findMany({
      where: {
        userId,
        collectionId,
      },
    }),

  upsert: ({
    id,
    userId,
    collectionId,
    name,
    enabled,
    path,
  }: {
    id: number;
    userId: string;
    collectionId?: string;
    name?: string;
    enabled?: boolean;
    path?: string;
  }) =>
    prisma.rule.upsert({
      where: {
        id_userId: {
          id,
          userId,
        },
      },
      create: {
        id,
        userId,
        collectionId: collectionId!,
        name: name!,
      },
      update: {
        name,
        enabled,
        path,
      },
    }),

  delete: ({ id, userId }: { id: number; userId: string }) =>
    prisma.rule.delete({
      where: {
        id_userId: {
          id,
          userId,
        },
      },
    }),
};
