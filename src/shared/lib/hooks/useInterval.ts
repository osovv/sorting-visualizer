import { useEffect, useRef } from 'react';

export interface UseIntervalProps {
  delayMs: number;
  active: boolean;
  immediateStart: boolean;
}

export function useInterval(
  f: () => void,
  { delayMs, active, immediateStart }: UseIntervalProps,
): void {
  const savedRefCallback = useRef<() => void>();

  useEffect(() => {
    savedRefCallback.current = f;
  });

  function cb() {
    savedRefCallback.current?.();
  }

  useEffect(() => {
    if (active) {
      if (immediateStart) {
        cb();
      }
      const interval = setInterval(cb, delayMs);

      return () => {
        clearInterval(interval);
      };
    }
  }, [active, delayMs, immediateStart]);
}
