import { SortHistoryStep } from "../../types";
//import { swapUnsafe } from "../../utils/array";
import {
  addToComparing,
  addToSorted,
  addToSwapping,
  cleanStatuses,
  initializeSteps,
} from "../helpers";


function addToSortedRules(
  historySteps: SortHistoryStep[], 
  left: number, 
  right: number,
  pointer: number 
){
  if ((pointer == left + 1) && (right - left !== 2)) {
    historySteps = addToSorted(historySteps, pointer);
    historySteps = addToSorted(historySteps, left);
  }
  else if (right - left === 2) {
    historySteps = addToSorted(historySteps, right);
    historySteps = addToSorted(historySteps, right - 1);
    historySteps = addToSorted(historySteps, left);
  }
  else if ((pointer === right - 1)){
    historySteps = addToSorted(historySteps, right);
    historySteps = addToSorted(historySteps, pointer);
  }
  else{
    historySteps = addToSorted(historySteps, pointer);
  }

  return historySteps;
}

function partition(
  historySteps: SortHistoryStep[], 
  nums: number[], 
  left: number, 
  right: number, 
):[number, SortHistoryStep[]]{
  const pivot = nums[right];
  let i = left - 1;

  for (let j = left; j <= right - 1; j++){
    historySteps = addToComparing(historySteps, j, right);
    if (nums[j] <= pivot){
      i++;
      if (i !== j){
        historySteps = addToSwapping(historySteps, i, j);
      }
      
      [nums[i], nums[j]] = [nums[j], nums[i]];
      //nums = swapUnsafe(nums, j, i);
    }
    historySteps = cleanStatuses(historySteps);
  }
  historySteps = addToSwapping(historySteps, right, i + 1);
  
  [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];
  //nums = swapUnsafe(nums, right, i + 1);
  
  historySteps = cleanStatuses(historySteps);
  historySteps = addToSortedRules(historySteps, left, right, i + 1);

  return [(i + 1), historySteps]
}

function quickSortRecursion(
  historySteps: SortHistoryStep[], 
  nums: number[], 
  left: number, 
  right: number
){
  if (left < right){
    let index;
    [index, historySteps] = partition(historySteps, nums, left, right);
    historySteps = quickSortRecursion(historySteps, nums, left, index - 1);
    historySteps = quickSortRecursion(historySteps, nums, index + 1, right);
  }   
  
  return historySteps;
}

export const QuickSort = (array: number[]): SortHistoryStep[] => {
  const nums = array.slice();
  let historySteps: SortHistoryStep[] = initializeSteps(nums);

  console.log(historySteps);

  historySteps = quickSortRecursion(historySteps, nums, 0, nums.length - 1);
  
  console.log(historySteps);
  return historySteps;
};
