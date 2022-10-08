import { SortHistory } from 'shared/types';
import { List } from 'immutable';
import { swapUnsafe } from 'shared/lib/immutable';

export const initializeSteps = (array: List<number>): SortHistory => {
  return List([
    {
      array: array,
      sorted: List(),
      swapping: [],
      comparing: [],
      step: 0,
    },
  ]);
};

export const addToComparing = (
  historySteps: SortHistory,
  i: number,
  j: number,
) => {
  const last = historySteps.last();

  if (last === undefined) {
    return historySteps;
  }

  return historySteps.push({
    ...last,
    comparing: [i, j],
    step: last.step + 1,
  });
};

export const addToSorted = (historySteps: SortHistory, indexes: number[]) => {
  const last = historySteps.last();

  if (last === undefined) {
    return historySteps;
  }

  return historySteps.push({
    ...last,
    sorted: last.sorted.push(...indexes),
    step: last.step + 1,
  });
};

export const addToSwapping = (
  historySteps: SortHistory,
  i: number,
  j: number,
) => {
  const last = historySteps.last();

  if (last === undefined) {
    return historySteps;
  }

  return historySteps.push({
    ...last,
    comparing: [],
    swapping: [i, j],
    array: swapUnsafe(last.array, i, j),
    step: last.step + 1,
  });
};

export const cleanStatuses = (historySteps: SortHistory) => {
  const last = historySteps.last();

  if (last === undefined) {
    return historySteps;
  }

  return historySteps.push({
    ...last,
    swapping: [],
    comparing: [],
    step: last.step + 1,
  });
};
