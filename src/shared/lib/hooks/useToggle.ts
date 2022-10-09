import { useCallback, useState } from 'react';

export function useToggle(initialValue: boolean) {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setValue((value) => !value), []);
  const turnOn = useCallback(() => setValue(true), []);
  const turnOff = useCallback(() => setValue(false), []);

  return {
    value,
    toggle,
    turnOn,
    turnOff,
  } as const;
}
