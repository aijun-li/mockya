import prisma from '@/tools/prisma';

export default {
  get: (id: number) =>
    prisma.mockHeader.findUniqueOrThrow({
      where: {
        id,
      },
    }),

  create: ({ key, value, mockId }: { key: string; value?: string; mockId: number }) =>
    prisma.mockHeader.create({
      data: {
        key,
        value,
        mockId,
      },
    }),

  update: ({ id, key, value, enabled }: { id: number; key?: string; value?: string; enabled?: boolean }) =>
    prisma.mockHeader.update({
      data: {
        key,
        value,
        enabled,
      },
      where: {
        id,
      },
    }),

  delete: (id: number) =>
    prisma.mockHeader.delete({
      where: {
        id,
      },
    }),
};
