import { List } from 'immutable';
import { generateFromToArray } from 'shared/lib/array';
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

  for (let i = 0; i < nums.size / 2; i++) {
    let swapped = false;
    for (let j = i; j < nums.size - i - 1; j++) {
      historySteps = addToComparing(historySteps, j, j + 1);
      if (getUnsafe(nums, j) > getUnsafe(nums, j + 1)) {
        nums = swapUnsafe(nums, j, j + 1);
        historySteps = addToSwapping(historySteps, j, j + 1);
        swapped = true;
      }
      historySteps = cleanStatuses(historySteps);
    }
    historySteps = addToSorted(historySteps, [nums.size - i - 1]);
    for (let j = array.size - 2 - i; j > i; j--) {
      historySteps = addToComparing(historySteps, j, j + 1);
      if (getUnsafe(nums, j) < getUnsafe(nums, j - 1)) {
        nums = swapUnsafe(nums, j, j - 1);
        historySteps = addToSwapping(historySteps, j, j - 1);
        swapped = true;
      }
      historySteps = cleanStatuses(historySteps);
    }

    if (!swapped) {
      historySteps = addToSorted(
        historySteps,
        generateFromToArray(i, nums.size - i - 1),
      );
      break;
    }

    historySteps = addToSorted(historySteps, [i]);
  }

  return historySteps;
};

export const CocktailShakerSort: SortType = {
  name: 'Cocktail Shaker Sort',
  sort,
};
