import { trpc } from '@/service';

export type MatcherCondition = Awaited<ReturnType<typeof trpc.getMatcherCondition.query>>;

export type BaseMatcher = Awaited<ReturnType<typeof trpc.getMatcher.query>>;

export type Matcher = Awaited<ReturnType<typeof trpc.getMatcherFull.query>>;

export type MatcherUpdateCondition = {
  id: number;
  key?: string;
  value?: string;
};
