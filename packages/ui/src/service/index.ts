import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from 'whistle.mockya/src/types';

const prefix = import.meta.env.DEV ? 'http://localhost:8899/whistle.mockya' : '/whistle.mockya';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${prefix}/trpc`,
    }),
  ],
});
