import { trpc } from '@/service';

export type BaseRule = Awaited<ReturnType<typeof trpc.getRule.query>>;

export type Rule = Awaited<ReturnType<typeof trpc.getRuleFull.query>>;

export type BaseRuleConfig = Pick<BaseRule, 'name' | 'enabled' | 'path'>;
