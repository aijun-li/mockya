import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const { router, procedure, mergeRouters } = t;
