import {
  BubbleSort,
  CocktailShakerSort,
  InsertionSort,
  SelectionSort,
  QuickSort,
} from './model';

export const sorts = [
  BubbleSort,
  CocktailShakerSort,
  SelectionSort,
  InsertionSort,
  QuickSort,
] as const;

export {
  BubbleSort,
  CocktailShakerSort,
  SelectionSort,
  InsertionSort,
  QuickSort,
};
