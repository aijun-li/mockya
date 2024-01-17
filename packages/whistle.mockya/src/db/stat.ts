import prisma from '@/tools/prisma';

export default {
  get: (key: string) =>
    prisma.intStat.findUniqueOrThrow({
      where: {
        key,
      },
    }),

  getAll: () => prisma.intStat.findMany(),

  updateBy: (key: string, byValue: number) =>
    prisma.intStat.upsert({
      where: {
        key,
      },
      update: {
        value: {
          increment: byValue,
        },
      },
      create: {
        key,
        value: byValue,
      },
    }),
};
