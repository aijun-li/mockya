import type { AppRouter } from '@shared/types';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

const prefix = import.meta.env.DEV ? 'http://localhost:8899/whistle.mockya' : '/whistle.mockya';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${prefix}/trpc`,
    }),
  ],
});
