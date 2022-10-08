import { List } from 'immutable';
import { generateRandomArray } from 'shared/lib/array';
import { describe, expect, it } from 'vitest';
import { SORTS } from '.';

const ARRAY = List(generateRandomArray(10, 0, 100));

describe('sorting algortihmm', () => {
  describe('should return non-empty sorting history', () => {
    for (const { name, sort } of SORTS) {
      it(`${name}`, () => {
        const history = sort(ARRAY);
        expect(history.size).toBeGreaterThan(0);
      });
    }
  });

  describe('should return sorted original array on last step', () => {
    for (const { name, sort } of SORTS) {
      it(`${name}`, () => {
        const history = sort(ARRAY);
        const resultArray = history.last()?.array;
        expect(resultArray).toEqual(ARRAY.sort((a, b) => a - b));
      });
    }
  });
});
