import { createEffect, createEvent } from 'effector';
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

const themeToggled = createEvent<ChangeEvent<HTMLInputElement>>();

const updateThemeFx = createEffect((checked: boolean) => {
  const theme = THEMES.get(checked);
  if (theme) {
    setThemeAttribute(theme);
  }
});

const $theme = createLocalStorageStore('theme', false).on(
  themeToggled,
  (checked) => !checked,
);

// eslint-disable-next-line effector/no-watch
$theme.watch((theme) => updateThemeFx(theme));

export const useToggleTheme = () => {
  return useUnit(themeToggled);
};

export const useTheme = () => {
  return useUnit($theme);
};
