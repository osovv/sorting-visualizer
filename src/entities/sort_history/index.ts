export type SortHistoryStep = {
  step: number;
  array: number[];
  sorted: number[];
  swapping: number[];
  comparing: number[];
};

export type SortHistory = SortHistoryStep[];
