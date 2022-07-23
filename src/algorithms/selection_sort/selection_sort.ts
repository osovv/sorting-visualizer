import { SortHistoryStep } from "../../types";
import { swapUnsafe } from "../../utils/array";
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from "../helpers";

export const __SelectionSort = (array: number[]): SortHistoryStep[] => {
  let nums = array.slice();
  let historySteps: SortHistoryStep[] = initializeSteps(nums);

  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      historySteps = addToComparing(historySteps, j, min);
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    nums = swapUnsafe(nums, i, min);
    historySteps = addToSwapping(historySteps, i, min);
    historySteps = cleanStatuses(historySteps);
    historySteps = addToSorted(historySteps, [i]);
  }
  historySteps = addToSorted(historySteps, [nums.length - 1]);

  return historySteps;
};
