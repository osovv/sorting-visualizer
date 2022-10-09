import { createEvent, sample } from 'effector';
import { useUnit } from 'effector-react';
import { ChangeEvent } from 'react';
import { createLocalStorageStore } from 'shared/lib/localStorage';

const THEMES: Map<false | true, 'light' | 'dark'> = new Map([
  [false, 'light'],
  [true, 'dark'],
]);

const setThemeAttribute = (theme: 'dark' | 'light') => {
  document.documentElement.dataset.theme = theme;
};

const toggleTheme = createEvent<ChangeEvent<HTMLInputElement>>();

const setTheme = createEvent();

const $theme = createLocalStorageStore('theme', false)
  .on(toggleTheme, (checked) => !checked)
  .on(setTheme, (checked) => {
    const theme = THEMES.get(checked);
    if (theme) {
      setThemeAttribute(theme);
    }
  });

sample({
  source: $theme,
  target: setTheme,
});

export const useThemeToggle = () => {
  return useUnit(toggleTheme);
};

export const useTheme = () => {
  return useUnit($theme);
};
