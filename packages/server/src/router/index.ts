import { mergeRouters } from '@/tools/trpc';
import userRouter from './user';
import collectionRouter from './collection';
import ruleRouter from './rule';

const router = mergeRouters(userRouter, collectionRouter, ruleRouter);

export default router;
