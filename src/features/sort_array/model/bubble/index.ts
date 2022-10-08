import { swapUnsafe } from 'shared/lib/array';
import { SortType } from '..';
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from '../../../../entities/sort_history/lib';

const sort = (array: number[]) => {
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

export const BubbleSort: SortType = {
  name: 'Bubble Sort',
  sort,
};
