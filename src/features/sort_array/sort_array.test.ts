import { SORTS } from '.';
import { generateRandomArray, getLastUnsafe } from 'shared/lib/array';
import { describe, it, expect } from 'vitest';

const ARRAY = generateRandomArray(10, 0, 100);

describe('sorting algortihmm', () => {
  describe('should return non-empty sorting history', () => {
    for (const { name, sort } of SORTS) {
      it(`${name}`, () => {
        const history = sort(ARRAY);
        expect(history.length).toBeGreaterThan(0);
      });
    }
  });

  describe('should return sorted original array on last step', () => {
    function _sort(array: number[]) {
      const arr = array.slice();
      arr.sort((a, b) => a - b);
      return arr;
    }

    for (const { name, sort } of SORTS) {
      it(`${name}`, () => {
        const history = sort(ARRAY);
        const lastStep = getLastUnsafe(history);
        const resultArray = lastStep.array;
        expect(resultArray).toEqual(_sort(ARRAY));
      });
    }
  });
});
