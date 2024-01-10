import prisma from '@/tools/prisma';

export default {
  get: (id: number) =>
    prisma.ruleCondition.findUniqueOrThrow({
      where: {
        id,
      },
    }),

  getList: (ruleId: number) =>
    prisma.ruleCondition.findMany({
      where: {
        ruleId,
      },
    }),

  create: (ruleId: number) =>
    prisma.$transaction(async (tx) => {
      await tx.rule.update({
        where: {
          id: ruleId,
        },
        data: {
          collection: { update: { updatedAt: new Date() } },
        },
      });

      return tx.ruleCondition.create({
        data: {
          rule: {
            connect: {
              id: ruleId,
            },
          },
        },
      });
    }),

  update: ({ id, key, value }: { id: number; key?: string; value?: string }) =>
    prisma.ruleCondition.update({
      where: {
        id,
      },
      data: {
        key,
        value,
        rule: { update: { collection: { update: { updatedAt: new Date() } } } },
      },
    }),

  delete: (id: number) =>
    prisma.$transaction(async (tx) => {
      await tx.ruleCondition.update({
        where: {
          id,
        },
        data: {
          rule: { update: { collection: { update: { updatedAt: new Date() } } } },
        },
      });

      return tx.ruleCondition.delete({
        where: {
          id,
        },
      });
    }),
};
