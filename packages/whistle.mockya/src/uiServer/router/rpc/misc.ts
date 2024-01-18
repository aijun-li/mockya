import { procedure, router } from '@/tools/trpc';

export default router({
  checkWhistle: procedure.query(() => {
    return {
      whistle: true,
    };
  }),
});
