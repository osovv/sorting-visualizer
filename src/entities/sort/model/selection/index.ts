import { List } from 'immutable';
import { getUnsafe, swapUnsafe } from 'shared/lib/immutable';
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from '../../lib';
import { SortType } from '..';

const sort = (array: List<number>) => {
  let nums = array.slice();
  let historySteps = initializeSteps(nums);

  for (let i = 0; i < nums.size - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.size; j++) {
      historySteps = addToComparing(historySteps, j, min);
      if (getUnsafe(nums, j) < getUnsafe(nums, min)) {
        min = j;
      }
    }
    nums = swapUnsafe(nums, i, min);
    historySteps = addToSwapping(historySteps, i, min);
    historySteps = cleanStatuses(historySteps);
    historySteps = addToSorted(historySteps, [i]);
  }
  historySteps = addToSorted(historySteps, [nums.size - 1]);

  return historySteps;
};

export const SelectionSort: SortType = {
  name: 'Selection Sort',
  sort,
};
