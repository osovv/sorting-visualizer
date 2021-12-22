import { useEffect, useRef, useState } from "react";

export const useToggle = (initial: boolean) => {
  const [value, setValue] = useState<boolean>(initial);

  const toggle = () => setValue(!value);
  const turnOn = () => setValue(true);
  const turnOff = () => setValue(false);

  return [value, toggle, turnOn, turnOff] as const;
};

export const useCounter = (initial: number, min: number, max: number) => {
  const [counter, setCounter] = useState<number>(initial);

  const inc = () => {
    setCounter(Math.min(counter + 1, max));
  };
  const dec = () => setCounter(Math.max(counter - 1, min));
  const reset = () => {
    console.log("reset");
    setCounter(initial);
    console.log("counter", counter);
  };

  return [counter, inc, dec, reset] as const;
};

export function useInterval(
  f: () => void,
  delayMs: number,
  active: boolean,
  immediateStart: boolean
): void {
  const savedRefCallback = useRef<() => any>();

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
