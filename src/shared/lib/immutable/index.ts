import { List } from 'immutable';

export function getLastUnsafe<T>(array: List<T>): T {
  const last = array.last();
  if (last === undefined) {
    throw new RangeError("Can't get last element of an empty array!");
  } else {
    return last;
  }
}

export function getUnsafe<T>(array: List<T>, i: number): T {
  const element = array.get(i);

  if (element === undefined) {
    throw new RangeError("Can't swap out of boundaries elements");
  }

  return element;
}

export function swapUnsafe<T>(array: List<T>, i: number, j: number): List<T> {
  const iElement = array.get(i);
  const jElement = array.get(j);

  if (iElement === undefined || jElement === undefined) {
    throw new RangeError("Can't swap out of boundaries elements");
  }

  return array.withMutations((state) =>
    state.set(i, jElement).set(j, iElement),
  );
}
