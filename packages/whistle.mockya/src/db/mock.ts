import { CodeLang } from '@/shared/types';
import prisma from '@/tools/prisma';

const jsInitBody = `
/*
interface Req {
  urL: string;
  method: string;
  host: string;
  path: string;
  headers: Record<string, string>;
  query: Record<string, string>;
  body?: JSONValue;
}
*/

module.exports = async (req) => {
  // do something
  return req;
};
`.trimStart();

export default {
  get: (id: number) =>
    prisma.mock.findUniqueOrThrow({
      where: {
        id,
      },
    }),

  getFull: (id: number) =>
    prisma.mock.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        headers: true,
      },
    }),

  getDefault: (ruleId: number) =>
    prisma.mock.findFirstOrThrow({
      where: {
        ruleId,
        default: true,
      },
    }),

  getList: (ruleId: number) =>
    prisma.mock.findMany({
      where: {
        ruleId,
      },
    }),

  create: ({ name, lang, ruleId }: { name: string; lang: CodeLang; ruleId: number }) =>
    prisma.$transaction(async (tx) => {
      await tx.rule.update({
        where: {
          id: ruleId,
        },
        data: {
          collection: { update: { updatedAt: new Date() } },
        },
      });

      return tx.mock.create({
        data: {
          name,
          lang,
          body: lang === CodeLang.JavaScript ? jsInitBody : '',
          rule: {
            connect: { id: ruleId },
          },
        },
      });
    }),

  update: ({ id, name, body }: { id: number; name?: string; body?: string }) =>
    prisma.mock.update({
      data: {
        name,
        body,
        rule: { update: { collection: { update: { updatedAt: new Date() } } } },
      },
      where: {
        id,
      },
    }),

  delete: async (id: number) =>
    prisma.$transaction(async (tx) => {
      const target = await tx.mock.findUniqueOrThrow({
        where: {
          id,
        },
      });

      const defaultMock = await tx.mock.findFirstOrThrow({
        where: {
          ruleId: target.ruleId,
          default: true,
        },
      });

      const relatedMatchers = await tx.matcher.findMany({
        where: {
          mockId: id,
        },
      });

      // prisma does not support update relation in updateMany()
      await Promise.all(
        relatedMatchers.map((matcher) =>
          tx.matcher.update({
            where: {
              id: matcher.id,
            },
            data: {
              mock: {
                connect: {
                  id: defaultMock.id,
                },
              },
            },
          }),
        ),
      );

      await tx.mock.update({
        where: {
          id,
        },
        data: {
          rule: { update: { collection: { update: { updatedAt: new Date() } } } },
        },
      });

      return tx.mock.delete({
        where: {
          id,
        },
      });
    }),
};
