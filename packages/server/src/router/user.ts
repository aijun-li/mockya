import db from '@/db';
import { procedure, router } from '@/tools/trpc';

export default router({
  getAllUsers: procedure.query(async () => {
    const data = await db.user.getAll();
    return data;
  }),
});
