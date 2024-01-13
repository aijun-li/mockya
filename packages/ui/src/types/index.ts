export * from './collection';
export * from './matcher';
export * from './mock';
export * from './rule';

export interface VersionUpdateInfo {
  hasUpdates: boolean;
  changelog: {
    currentVersion: string;
    latestVersion: string;
    features: string[];
    fixes: string[];
  };
}
