import db from '@/db';
import { procedure, router } from '@/tools/trpc';

export default router({
  getStats: procedure.query(async () => {
    const stats = await db.stat.getAll();
    return stats;
  }),
});
