import { List } from 'immutable';
import { getUnsafe, swapUnsafe } from 'shared/lib/immutable';
import { SortType } from '..';
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from '../../lib';

const sort = (array: List<number>) => {
  let nums = array.slice();
  let historySteps = initializeSteps(nums);

  for (let i = 0; i < nums.size; i++) {
    for (let j = 0; j < nums.size - i - 1; j++) {
      historySteps = addToComparing(historySteps, j, j + 1);
      if (getUnsafe(nums, j) > getUnsafe(nums, j + 1)) {
        nums = swapUnsafe(nums, j, j + 1);
        historySteps = addToSwapping(historySteps, j, j + 1);
      }
      historySteps = cleanStatuses(historySteps);
    }
    historySteps = addToSorted(historySteps, [nums.size - i - 1]);
  }

  return historySteps;
};

export const BubbleSort: SortType = {
  name: 'Bubble Sort',
  sort,
};
