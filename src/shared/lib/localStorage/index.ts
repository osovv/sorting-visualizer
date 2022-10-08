import { createEvent, createStore, sample } from 'effector';

const load = <T>(key: string): T | undefined => {
  const source = localStorage.getItem(key);

  if (source) {
    return JSON.parse(source) as T;
  }
  return undefined;
};

const save = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const createLocalStorageStore = <T>(key: string, defaultState: T) => {
  const updateLocalStorage = createEvent();

  const loadedValue = load<T>(key);

  const state = loadedValue || defaultState;

  const $store = createStore(state).on(updateLocalStorage, (state) =>
    save<T>(key, state),
  );

  sample({
    source: $store,
    target: updateLocalStorage,
  });

  return $store;
};
