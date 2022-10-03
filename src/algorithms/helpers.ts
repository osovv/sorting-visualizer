import { SortHistory } from '../types';
import { getLastUnsafe, swapUnsafe } from '../lib/array';

export const initializeSteps = (array: number[]): SortHistory => {
  return [
    {
      array: [...array],
      sorted: [],
      swapping: [],
      comparing: [],
      step: 0,
    },
  ];
};

export const addToComparing = (
  historySteps: SortHistory,
  i: number,
  j: number,
) => {
  const last = getLastUnsafe(historySteps);

  return [
    ...historySteps,
    {
      ...last,
      comparing: [i, j],
      step: last.step + 1,
    },
  ];
};

export const addToSorted = (historySteps: SortHistory, indexes: number[]) => {
  const last = getLastUnsafe(historySteps);

  return [
    ...historySteps,
    {
      ...last,
      sorted: [...last.sorted, ...indexes],
      step: last.step + 1,
    },
  ];
};

export const addToSwapping = (
  historySteps: SortHistory,
  i: number,
  j: number,
) => {
  const last = getLastUnsafe(historySteps);

  return [
    ...historySteps,
    {
      ...last,
      comparing: [],
      swapping: [i, j],
      array: [...swapUnsafe(last.array, i, j)],
      step: last.step + 1,
    },
  ];
};

export const cleanStatuses = (historySteps: SortHistory) => {
  const last = getLastUnsafe(historySteps);

  return [
    ...historySteps,
    {
      ...last,
      swapping: [],
      comparing: [],
      step: last.step + 1,
    },
  ];
};
