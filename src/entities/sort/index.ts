import {
  BubbleSort,
  CocktailShakerSort,
  InsertionSort,
  QuickSort,
  SelectionSort,
  SortType,
} from './model';

export * from './lib';

export const SORTS: readonly SortType[] = [
  BubbleSort,
  CocktailShakerSort,
  SelectionSort,
  InsertionSort,
  QuickSort,
] as const;

export const SORTS_NAMES = SORTS.map((s) => s.name);

export {
  BubbleSort,
  CocktailShakerSort,
  InsertionSort,
  QuickSort,
  SelectionSort,
};
