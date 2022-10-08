import { List } from 'immutable';
import { getUnsafe } from 'shared/lib/immutable';
import { SortType } from '..';
import {
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from '../../../../entities/sort_history/lib';

const sort = (array: List<number>) => {
  let nums = array.slice();
  let historySteps = initializeSteps(nums);

  for (let i = 0; i < nums.size; i++) {
    const tmp = getUnsafe(nums, i);
    let j = i - 1;

    while (j >= 0 && getUnsafe(nums, j) > tmp) {
      historySteps = addToSwapping(historySteps, j, j + 1);
      nums = nums.set(j + 1, getUnsafe(nums, j));
      j--;
    }
    historySteps = cleanStatuses(historySteps);
    nums = nums.set(j + 1, tmp);
  }

  for (let i = 0; i < nums.size; i++) {
    historySteps = addToSorted(historySteps, [i]);
  }
  return historySteps;
};

export const InsertionSort: SortType = {
  name: 'Insertion Sort',
  sort,
};
