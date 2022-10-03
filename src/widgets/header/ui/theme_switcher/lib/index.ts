import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { useToggle } from 'shared/lib/hooks';

const mapThemeToChecked = (theme: string): boolean => {
  return theme === 'dark';
};

export const useTheme = () => {
  const { value: checked, toggle, turnOn, turnOff } = useToggle(false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme !== null) {
      const checked = mapThemeToChecked(theme);
      if (checked) {
        turnOn();
      } else {
        turnOff;
      }
    } else {
      turnOn();
    }

    themeChange(false);
  }, []);

  return [checked, toggle] as const;
};
