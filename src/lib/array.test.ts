import {
  getRandomNumber,
  generateRandomArray,
  generateFromToArray,
  getLast,
  getLastUnsafe,
  swapUnsafe,
} from './array';

import { describe, it, expect, test } from 'vitest';

describe('getRandomNumber', () => {
  const cases = [
    [0, 1],
    [-1000, 1000],
    [0, 0],
  ];

  test.each(cases)(
    'should generate number within given boundaries',
    (min, max) => {
      const randomNumber = getRandomNumber(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
    },
  );
});

describe('getRandomArray', () => {
  describe('should return arrays of desired length', () => {
    const cases = [
      [0, -10, 10],
      [1000, -100, 100],
      [10, 0, 0],
    ];

    test.each(cases)('', (length, min, max) => {
      const arr = generateRandomArray(length, min, max);
      expect(arr.length).toEqual(length);
    });
  });

  describe('should raise RangeError if specified length is negative', () => {
    const cases = [
      [-100, -10, 10],
      [-1, -100, 100],
    ];

    test.each(cases)('', (length, min, max) => {
      expect(() => generateRandomArray(length, min, max)).toThrow(RangeError);
    });
  });

  describe('should return elements within given boundaries', () => {
    const cases = [
      [10, -10, 10],
      [10, -100, 100],
      [10, 0, 1],
      [10, 0, 0],
    ];
    test.each(cases)('', (length, min, max) => {
      const arr = generateRandomArray(length, min, max);

      expect(Math.min(...arr)).toBeGreaterThanOrEqual(min);
      expect(Math.max(...arr)).toBeLessThanOrEqual(max);
    });
  });
});

describe('generateFromToArray', () => {
  describe('should throw RangeError if min is bigger than max', () => {
    const cases = [
      [10, 5],
      [1, 0],
      [-1, -5],
    ];

    test.each(cases)('', (min, max) => {
      expect(() => generateFromToArray(min, max)).toThrow(RangeError);
    });
  });
  describe('should return one element array if min is equal max', () => {
    const cases = [
      [0, 0],
      [-1, -1],
      [10, 10],
    ];

    test.each(cases)('', (min, max) => {
      const arr = generateFromToArray(min, max);
      expect(arr.length).toEqual(1);
      expect(arr[0]).toEqual(min);
    });
  });
  describe('should return array of consecutive numbers from min to max', () => {
    const cases = [
      [-5, 10],
      [10, 20],
      [0, 50],
    ];

    test.each(cases)('', (min, max) => {
      const arr = generateFromToArray(min, max);

      expect(arr.length).toEqual(max - min + 1);
      expect(Math.min(...arr)).toBeGreaterThanOrEqual(min);
      expect(Math.max(...arr)).toBeLessThanOrEqual(max);
    });
  });
});

describe('getLast', () => {
  it("should return undefined if array's length is 0", () => {
    expect(getLast([])).toBeUndefined();
  });
  describe('should return last element of given array', () => {
    const cases = [
      ['a', 'b', 'c'],
      [1, 2, 3, 4, 5],
    ];

    test.each(cases)('', (array) => {
      expect(getLast(array)).toEqual(array[array.length - 1]);
    });
  });
});

describe('getLastUnsafe', () => {
  it("should raise RangeError if array's length is 0", () => {
    expect(() => getLastUnsafe([])).toThrow(RangeError);
  });
  describe('should return last element of given array', () => {
    const cases = [
      ['a', 'b', 'c'],
      [1, 2, 3, 4, 5],
    ];

    test.each(cases)('', (array) => {
      expect(getLastUnsafe(array)).toEqual(array[array.length - 1]);
    });
  });
});

describe('swapUnsafe', () => {
  const arrays = [
    [1, 2, 3, 4],
    ['a', 'b', 'c', 'd'],
  ];
  describe('should throw RangeError if elements are out of boundaries', () => {
    const cases = [
      [[...arrays[0]], -1, 10],
      [[...arrays[1]], 0, 5],
      [[...arrays[0]], -15, 3],
    ];

    test.each(cases)('', (array, i, j) => {
      expect(() => swapUnsafe(array, i, j)).toThrow(RangeError);
    });
  });

  describe('should return new array with swapped elements (by ther indexes)', () => {
    const cases = [
      [[...arrays[0]], 0, 1],
      [[...arrays[1]], 3, 3],
      [[...arrays[0]], 1, 2],
    ];

    test.each(cases)('', (array, i, j) => {
      const result = swapUnsafe(array, i, j);
      expect(result[i]).toEqual(array[j]);
      expect(result[j]).toEqual(array[i]);
    });
  });
});
