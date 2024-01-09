export type { AppRouter } from '@/uiServer/router/rpc';

export type OriginalReq = Whistle.PluginServerRequest['originalReq'];

export type JSONValue = null | string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

export type MatchCandidate = [
  configCount: number,
  pathLength: number,
  isDefault: number,
  createdAt: number,
  body: JSONValue,
  ruleId: number,
  matcherId: number,
  delay: number,
];
