import prisma from '@/tools/prisma';

export default {
  get: (id: number) =>
    prisma.mockHeader.findUniqueOrThrow({
      where: {
        id,
      },
    }),

  create: ({ key, value, mockId }: { key: string; value?: string; mockId: number }) =>
    prisma.$transaction(async (tx) => {
      await tx.mock.update({
        where: { id: mockId },
        data: {
          rule: { update: { collection: { update: { updatedAt: new Date() } } } },
        },
      });

      return tx.mockHeader.create({
        data: {
          key,
          value,
          mockId,
        },
      });
    }),

  update: ({ id, key, value, enabled }: { id: number; key?: string; value?: string; enabled?: boolean }) =>
    prisma.mockHeader.update({
      data: {
        key,
        value,
        enabled,
        mock: { update: { rule: { update: { collection: { update: { updatedAt: new Date() } } } } } },
      },
      where: {
        id,
      },
    }),

  delete: (id: number) =>
    prisma.$transaction(async (tx) => {
      await tx.mockHeader.update({
        where: {
          id,
        },
        data: {
          mock: { update: { rule: { update: { collection: { update: { updatedAt: new Date() } } } } } },
        },
      });

      return tx.mockHeader.delete({
        where: {
          id,
        },
      });
    }),
};
