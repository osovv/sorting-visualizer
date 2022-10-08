import { useEffect, useRef } from 'react';

interface Props {
  delayMs: number;
  active: boolean;
  immediateStart: boolean;
}
export default function useInterval(
  f: () => void,
  { delayMs, active, immediateStart }: Props,
): void {
  const savedRefCallback = useRef<() => void>();

  useEffect(() => {
    savedRefCallback.current = f;
  });

  function cb() {
    savedRefCallback.current && savedRefCallback.current();
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
