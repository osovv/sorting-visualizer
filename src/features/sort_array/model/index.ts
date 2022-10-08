import { SortHistory } from 'shared/types';
import { List } from 'immutable';

export type SortType = {
  name: string;
  sort: (array: List<number>) => SortHistory;
};

export * from './bubble';
export * from './cocktail_shaker';
export * from './insertion';
export * from './quick';
export * from './selection';
