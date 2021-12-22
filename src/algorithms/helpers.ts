import { SortHistoryStep } from "../types";
import { getLastUnsafe, swapUnsafe } from "../utils/array";

export const initializeSteps = (array: number[]): SortHistoryStep[] => {
  return [
    {
      array: array,
      sorted: [],
      swapping: [],
      comparing: [],
      step: 0,
    },
  ];
};

export const addToComparing = (
  historySteps: SortHistoryStep[],
  i: number,
  j: number
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

export const addToSorted = (historySteps: SortHistoryStep[], i: number) => {
  const last = getLastUnsafe(historySteps);

  return [
    ...historySteps,
    {
      ...last,
      sorted: [...last.sorted, i],
      step: last.step + 1,
    },
  ];
};

export const addToSwapping = (
  historySteps: SortHistoryStep[],
  i: number,
  j: number
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

export const cleanStatuses = (historySteps: SortHistoryStep[]) => {
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
