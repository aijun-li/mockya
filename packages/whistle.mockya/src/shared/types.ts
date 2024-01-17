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
}
