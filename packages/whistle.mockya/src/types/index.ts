export type OriginalReq = Whistle.PluginServerRequest['originalReq'];

export type JSONValue = null | string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

export type MatchCandidate = {
  conditionCount: number;
  pathLength: number;
  isDefault: number;
  createdAt: number;

  delay: number;
  collectionId: string;
  collectionName: string;
  ruleId: number;
  ruleName: string;
  mockId: number;
  mockName: string;
  body: JSONValue;
  matcherId: number;
};
