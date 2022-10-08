import { List } from 'immutable';

export interface SortHistoryStep {
  step: number;
  array: List<number>;
  sorted: List<number>;
  swapping: number[];
  comparing: number[];
}

export type SortHistory = List<SortHistoryStep>;
