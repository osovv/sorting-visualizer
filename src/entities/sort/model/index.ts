import { List } from 'immutable';
import { SortHistory } from 'shared/types';

export interface SortType {
  name: string;
  sort: (array: List<number>) => SortHistory;
}

export * from './bubble';
export * from './cocktail_shaker';
export * from './insertion';
export * from './quick';
export * from './selection';
