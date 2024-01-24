import { createHTTPServer } from '@trpc/server/adapters/standalone';

import router from '@/router';

const server = createHTTPServer({
  router,
});

server.listen(3000);
