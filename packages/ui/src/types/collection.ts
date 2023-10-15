import { Rule } from './rule';

export interface BaseCollection {
  id: string;
  name: string;

  createdAt: string;
  updatedAt: string;
}

export interface Collection extends BaseCollection {
  rules: Rule[];
}
