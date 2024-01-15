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

export interface WorkerRequest<T> {
  id: number;
  message: T;
}

export interface WorkerResponse<T> {
  id: number;
  message: T;
  error?: unknown;
}

export interface CodeFormatMessage {
  cursorOffset: number;
  code: string;
}
