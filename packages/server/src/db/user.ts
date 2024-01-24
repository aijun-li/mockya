import prisma from '@/tools/prisma';

export default {
  getAll: () => prisma.user.findMany(),
};
