import { SortHistory } from 'entities/sort_history';

export type SortType = {
  name: string;
  sort: (array: number[]) => SortHistory;
};

export * from './bubble';
export * from './cocktail_shaker';
export * from './insertion';
export * from './quick';
export * from './selection';
