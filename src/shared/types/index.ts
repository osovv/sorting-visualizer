import { SortHistory } from 'entities/sort_history';

export type SortMapping = {
  name: string;
  value: (_array: number[]) => SortHistory;
};
