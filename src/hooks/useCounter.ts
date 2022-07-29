import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface ReturnType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}

function useCounter(
  initialValue: number,
  min: number,
  max: number
): ReturnType {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(
    () => setCount((value) => Math.min(value + 1, max)),
    [max]
  );
  const decrement = useCallback(
    () => setCount((value) => Math.max(value - 1, min)),
    [min]
  );
  const reset = useCallback(() => setCount(initialValue), []);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  } as const;
}

export { useCounter };
