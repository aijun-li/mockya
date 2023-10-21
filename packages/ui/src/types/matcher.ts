import { trpc } from '@/service';

export type MatcherConfig = Awaited<ReturnType<typeof trpc.getMatcherConfig.query>>;

export type BaseMatcher = Awaited<ReturnType<typeof trpc.getMatcher.query>>;

export type Matcher = Awaited<ReturnType<typeof trpc.getMatcherFull.query>>;

export type MatcherUpdateConfig = {
  id: number;
  key?: string;
  value?: string;
};
