import { useEffect, useRef, useState, useCallback } from "react";

export const useToggle = (initial: boolean) => {
  const [value, setValue] = useState<boolean>(initial);

  const toggle = useCallback(() => setValue((value) => !value), []);
  const turnOn = useCallback(() => setValue(true), []);
  const turnOff = useCallback(() => setValue(false), []);

  return [value, toggle, turnOn, turnOff] as const;
};

export function useInterval(
  f: () => void,
  delayMs: number,
  active: boolean,
  immediateStart: boolean
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
