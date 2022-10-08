export * from './lib';

import {
  BubbleSort,
  CocktailShakerSort,
  InsertionSort,
  SelectionSort,
  QuickSort,
  SortType,
} from './model';

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
  SelectionSort,
  InsertionSort,
  QuickSort,
};
