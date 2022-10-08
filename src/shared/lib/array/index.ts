export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function generateRandomArray(length: number, min: number, max: number) {
  if (length < 0) {
    throw new RangeError('Length must not be negative');
  }
  return Array.from({ length }, () => getRandomNumber(min, max));
}

export function generateFromToArray(min: number, max: number) {
  if (min > max) {
    throw new RangeError('Min must not be bigger than max');
  }
  return [...new Array<number>(max - min + 1)].map((x, i) => i + min);
}

export function getLast<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}

export function getLastUnsafe<T>(array: T[]): T {
  if (array.length === 0) {
    throw new RangeError("Can't get last element of an empty array!");
  } else {
    return array[array.length - 1];
  }
}

export function swapUnsafe<T>(array: T[], i: number, j: number): T[] {
  if (i >= array.length || j >= array.length || i < 0 || j < 0) {
    throw new RangeError("Can't swap out of boundaries elements");
  } else {
    const res = array.slice();
    const tmp = res[i];
    res[i] = res[j];
    res[j] = tmp;
    return res;
  }
}
