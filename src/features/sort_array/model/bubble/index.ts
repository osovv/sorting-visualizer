import { swapUnsafe } from 'shared/lib/array';
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from '../../lib';

export const BubbleSort = (array: number[]) => {
  let nums = array.slice();
  let historySteps = initializeSteps(nums);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      historySteps = addToComparing(historySteps, j, j + 1);
      if (nums[j] > nums[j + 1]) {
        nums = swapUnsafe(nums, j, j + 1);
        historySteps = addToSwapping(historySteps, j, j + 1);
      }
      historySteps = cleanStatuses(historySteps);
    }
    historySteps = addToSorted(historySteps, [nums.length - i - 1]);
  }

  return historySteps;
};
