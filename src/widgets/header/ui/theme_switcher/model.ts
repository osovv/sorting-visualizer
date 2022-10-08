import { createEvent, createStore, Store } from 'effector';
import { useStore } from 'effector-react';
import { ChangeEvent } from 'react';
import connectLocalStorage from 'effector-localstorage';

const THEMES: Map<false | true, 'light' | 'dark'> = new Map([
  [false, 'light'],
  [true, 'dark'],
]);

const setTheme = (theme: 'dark' | 'light') => {
  document.documentElement.setAttribute('data-theme', theme);
};

export const toggleTheme = createEvent<ChangeEvent<HTMLInputElement>>();

const themeLocalStorage = connectLocalStorage('theme').onError((err) =>
  console.log(err),
);

const $theme: Store<boolean> = createStore(themeLocalStorage.init(false)).on(
  toggleTheme,
  (checked) => !checked,
);

$theme.watch((state) => {
  const theme = THEMES.get(state);
  if (theme) {
    setTheme(theme);
  }
});

$theme.watch(themeLocalStorage);

export const useTheme = () => {
  return useStore($theme);
};
