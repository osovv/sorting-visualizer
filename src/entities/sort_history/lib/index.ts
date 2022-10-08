import { SortHistory } from 'entities/sort_history';
import { List } from 'immutable';
import { swapUnsafe } from 'shared/lib/array';

export const initializeSteps = (array: number[]): SortHistory => {
  return List([
    {
      array: List(array),
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

  const iElement = last.array.get(i);
  const jElement = last.array.get(j);

  if (iElement === undefined || jElement === undefined) {
    return historySteps;
  }

  return historySteps.push({
    ...last,
    comparing: [],
    swapping: [i, j],
    array: last.array.set(i, jElement).set(j, iElement),
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
