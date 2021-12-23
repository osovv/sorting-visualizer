import { SortHistoryStep } from "../../types";
import { swapUnsafe } from "../../utils/array";
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from "../helpers";

export const CoctailShakerSort = (array: number[]): SortHistoryStep[] => {
  let nums = array.slice();
  let historySteps: SortHistoryStep[] = initializeSteps(nums);

  for (let i = 0; i < nums.length / 2; i++) {
    for (let j = i; j < nums.length - i - 1; j++) {
      historySteps = addToComparing(historySteps, j, j + 1);
      if (nums[j] > nums[j + 1]) {
        nums = swapUnsafe(nums, j, j + 1);
        historySteps = addToSwapping(historySteps, j, j + 1);
      }
      historySteps = cleanStatuses(historySteps);
    }
    historySteps = addToSorted(historySteps, nums.length - i - 1);
    for (let j = array.length - 2 - i; j > i; j--) {
      historySteps = addToComparing(historySteps, j, j + 1);
      if (nums[j] < nums[j - 1]) {
        nums = swapUnsafe(nums, j, j - 1);
        historySteps = addToSwapping(historySteps, j, j - 1);
      }
      historySteps = cleanStatuses(historySteps);
    }
    historySteps = addToSorted(historySteps, i);
  }

  return historySteps;
};
