import { SortHistory } from '../types';
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from './helpers';

function addToSortedRules(
  historySteps: SortHistory,
  left: number,
  right: number,
  pointer: number,
) {
  if (pointer == left + 1 && right - left !== 2) {
    historySteps = addToSorted(historySteps, [pointer, left]);
  } else if (right - left === 2) {
    historySteps = addToSorted(historySteps, [right, right - 1, left]);
  } else if (pointer === right - 1) {
    historySteps = addToSorted(historySteps, [right, pointer]);
  } else {
    historySteps = addToSorted(historySteps, [pointer]);
  }

  return historySteps;
}

function partition(
  historySteps: SortHistory,
  nums: number[],
  left: number,
  right: number,
): [number, SortHistory] {
  const pivot = nums[right];
  let i = left - 1;

  for (let j = left; j <= right - 1; j++) {
    historySteps = addToComparing(historySteps, j, right);
    if (nums[j] <= pivot) {
      i++;
      if (i !== j) {
        historySteps = addToSwapping(historySteps, i, j);
      }

      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    historySteps = cleanStatuses(historySteps);
  }
  historySteps = addToSwapping(historySteps, right, i + 1);

  [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];

  historySteps = cleanStatuses(historySteps);
  historySteps = addToSortedRules(historySteps, left, right, i + 1);

  return [i + 1, historySteps];
}

function quickSortRecursion(
  historySteps: SortHistory,
  nums: number[],
  left: number,
  right: number,
) {
  if (left < right) {
    let index: number;
    [index, historySteps] = partition(historySteps, nums, left, right);
    historySteps = quickSortRecursion(historySteps, nums, left, index - 1);
    historySteps = quickSortRecursion(historySteps, nums, index + 1, right);
  }

  return historySteps;
}

export const __QuickSort = (array: number[]): SortHistory => {
  const nums = array.slice();
  let historySteps = initializeSteps(nums);

  historySteps = quickSortRecursion(historySteps, nums, 0, nums.length - 1);

  return historySteps;
};
