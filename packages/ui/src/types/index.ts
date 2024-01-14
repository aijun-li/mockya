export * from './collection';
export * from './matcher';
export * from './mock';
export * from './rule';

export interface ChangelogInfo {
  currentVersion: string;
  latestVersion: string;
  features: string[];
  fixes: string[];
}

export interface VersionUpdateInfo {
  hasUpdates: boolean;
  changelog: ChangelogInfo;
}
