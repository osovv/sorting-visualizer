export type AppState = {
  array: number[];
  min: number;
  max: number;
  size: number;
  delayMs: number;
  sort: ((ar: number[]) => SortHistory) | undefined;
};

export type SortMapping = {
  name: string;
  value: (_array: number[]) => SortHistory;
};
