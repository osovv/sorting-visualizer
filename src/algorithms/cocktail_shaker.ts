import { generateFromToArray, swapUnsafe } from 'shared/lib/array';
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from './helpers';

export const __CocktailShakerSort = (array: number[]) => {
  let nums = array.slice();
  let historySteps = initializeSteps(nums);

  for (let i = 0; i < nums.length / 2; i++) {
    let swapped = false;
    for (let j = i; j < nums.length - i - 1; j++) {
      historySteps = addToComparing(historySteps, j, j + 1);
      if (nums[j] > nums[j + 1]) {
        nums = swapUnsafe(nums, j, j + 1);
        historySteps = addToSwapping(historySteps, j, j + 1);
        swapped = true;
      }
      historySteps = cleanStatuses(historySteps);
    }
    historySteps = addToSorted(historySteps, [nums.length - i - 1]);
    for (let j = array.length - 2 - i; j > i; j--) {
      historySteps = addToComparing(historySteps, j, j + 1);
      if (nums[j] < nums[j - 1]) {
        nums = swapUnsafe(nums, j, j - 1);
        historySteps = addToSwapping(historySteps, j, j - 1);
        swapped = true;
      }
      historySteps = cleanStatuses(historySteps);
    }

    if (!swapped) {
      historySteps = addToSorted(
        historySteps,
        generateFromToArray(i, nums.length - i - 1),
      );
      break;
    }

    historySteps = addToSorted(historySteps, [i]);
  }

  return historySteps;
};
