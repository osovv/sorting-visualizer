import { SortHistory } from 'entities/sort_history';

export type Sort = (array: number[]) => SortHistory;

export { BubbleSort } from './bubble';
export { CocktailShakerSort } from './cocktail_shaker';
export { InsertionSort } from './insertion';
export { SelectionSort } from './selection';
export { QuickSort } from './quick';
