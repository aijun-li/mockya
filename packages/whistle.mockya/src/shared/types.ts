export type { AppRouter } from '@/uiServer/router/rpc';

export enum IntStatKey {
  MockTimes = 'mock-times',
  MockDataSize = 'mock-data-size',

  CreatedCollections = 'created-collections',
  CreatedRules = 'created-rules',
  CreatedMatchers = 'created-matchers',
  CreatedMockData = 'created-mock-data',
}

export enum SocketEventName {
  StatsUpdate = 'stats-update',
  TrafficUpdate = 'traffic-update',
}

export interface TrafficItem {
  id: string;
  complete?: boolean;
  url: string;
  path: string;
  queryEntries: string[][];
  bodyEntries: string[][];
  time: number;
  resp?: any;
  match: boolean;
  matchData?: {
    delay: number;
    collectionId: string;
    collectionName: string;
    ruleId: number;
    ruleName: string;
    mockId: number;
    mockName: string;
  };
}

export enum CodeLang {
  JavaScript = 'javascript',
  JSON = 'json',
}
