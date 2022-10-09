import { List } from 'immutable';
import { getUnsafe, swapUnsafe } from 'shared/lib/immutable';
import { SortHistory } from 'shared/types';
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from '../../lib';
import { SortType } from '..';

function addToSortedRules(
  historySteps: SortHistory,
  left: number,
  right: number,
  pointer: number,
) {
  if (pointer === left + 1 && right - left !== 2) {
    return addToSorted(historySteps, [pointer, left]);
  }
  if (right - left === 2) {
    return addToSorted(historySteps, [right, right - 1, left]);
  }
  if (pointer === right - 1) {
    return addToSorted(historySteps, [right, pointer]);
  }
  return addToSorted(historySteps, [pointer]);
}

function partition(
  history: SortHistory,
  arr: List<number>,
  left: number,
  right: number,
): [number, SortHistory, List<number>] {
  let nums = arr.slice();
  let historySteps = history.slice();
  const pivot = getUnsafe(nums, right);
  let i = left - 1;

  for (let j = left; j <= right - 1; j++) {
    historySteps = addToComparing(historySteps, j, right);
    if (getUnsafe(nums, j) <= pivot) {
      i++;
      if (i !== j) {
        historySteps = addToSwapping(historySteps, i, j);
      }

      nums = swapUnsafe(nums, i, j);
    }
    historySteps = cleanStatuses(historySteps);
  }
  historySteps = addToSwapping(historySteps, right, i + 1);

  nums = swapUnsafe(nums, i + 1, right);

  historySteps = cleanStatuses(historySteps);
  historySteps = addToSortedRules(historySteps, left, right, i + 1);

  return [i + 1, historySteps, nums];
}

function quickSortRecursion(
  history: SortHistory,
  nums: List<number>,
  left: number,
  right: number,
) {
  let historySteps = history.slice();

  if (left < right) {
    let index: number;
    let arr;
    [index, historySteps, arr] = partition(historySteps, nums, left, right);
    historySteps = quickSortRecursion(historySteps, arr, left, index - 1);
    historySteps = quickSortRecursion(historySteps, arr, index + 1, right);
  }

  return historySteps;
}

const sort = (array: List<number>): SortHistory => {
  const nums = array.slice();
  let historySteps = initializeSteps(nums);

  historySteps = quickSortRecursion(historySteps, nums, 0, nums.size - 1);

  return historySteps;
};

export const QuickSort: SortType = {
  name: 'Quick Sort',
  sort,
};
