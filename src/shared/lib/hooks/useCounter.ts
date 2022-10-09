import { useCallback, useState } from 'react';

export function useCounter(initialValue: number, min: number, max: number) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(
    () => setCount((value) => Math.min(value + 1, max)),
    [max],
  );
  const decrement = useCallback(
    () => setCount((value) => Math.max(value - 1, min)),
    [min],
  );
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  } as const;
}
