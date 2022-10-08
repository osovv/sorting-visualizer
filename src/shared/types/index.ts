import { List } from 'immutable';

export type SortHistoryStep = {
  step: number;
  array: List<number>;
  sorted: List<number>;
  swapping: number[];
  comparing: number[];
};

export type SortHistory = List<SortHistoryStep>;
