import { useState, useCallback, useEffect, useMemo } from 'react';
import {
  BubbleSort,
  CocktailShakerSort,
  SelectionSort,
  QuickSort,
  InsertionSort,
} from 'algorithms';
import { initializeSteps } from 'algorithms/helpers';
import { Header } from 'widgets/header';
import { Menu } from 'widgets/menu/';
import { Visualizer } from 'widgets/visualizer';
import { useInterval, useToggle, useCounter } from 'shared/lib/hooks';
import { AppState, SortMapping } from 'shared/types';
import { generateRandomArray } from 'shared/lib/array';
import { mapSortNameToSort } from 'sorts';
import './index.css';

const SORTS_MAPPING: SortMapping[] = [
  {
    name: 'Bubble Sort',
    value: BubbleSort,
  },
  {
    name: 'Cocktail Shaker Sort',
    value: CocktailShakerSort,
  },
  {
    name: 'Selection Sort',
    value: SelectionSort,
  },
  {
    name: 'Quick Sort',
    value: QuickSort,
  },
  {
    name: 'Insertion Sort',
    value: InsertionSort,
  },
];

const SORT_OPTIONS = SORTS_MAPPING.map((mapping) => {
  return mapping.name;
});

export const App = () => {
  const [state, setState] = useState<AppState>({
    array: [],
    min: 10,
    max: 100,
    size: 50,
    delayMs: 0,
    sort: undefined,
  });

  const { value: sortChosen, turnOn: turnOnSortChosen } = useToggle(false);

  const setArray = useCallback(
    (array: number[]) =>
      setState((s) => {
        return { ...s, array: array };
      }),
    [],
  );

  const setSize = useCallback((size: number) => {
    setState((s) => {
      return { ...s, size: size };
    });
  }, []);

  const setDelay = useCallback((delay: number) => {
    setState((s) => {
      return { ...s, delayMs: delay };
    });
  }, []);

  const setSort = useCallback((sortName: string) => {
    const sort = mapSortNameToSort(sortName, SORTS_MAPPING);
    if (sort !== undefined) {
      turnOffPlaying();
      resetStep();
      turnOnSortChosen();
      setState((s) => {
        return { ...s, sort: sort };
      });
    }
  }, []);

  const sortHistory = useMemo(() => {
    if (state.sort !== undefined) {
      return state.sort(state.array);
    } else {
      return initializeSteps(state.array);
    }
  }, [state.array, state.sort]);

  const { count, increment, decrement, reset } = useCounter(
    0,
    0,
    sortHistory.length - 1,
  );

  const resetStep = useCallback(reset, []);

  useEffect(() => {
    setArray(generateRandomArray(state.size, state.min, state.max));
  }, [state.min, state.max, state.size, setArray]);

  const {
    value: playing,
    toggle: togglePlaying,
    turnOff: turnOffPlaying,
  } = useToggle(false);

  useInterval(
    () => {
      increment();
    },
    state.delayMs,
    playing,
    false,
  );

  useEffect(() => {
    if (count === sortHistory.length - 1) {
      turnOffPlaying();
    }
  }, [count, sortHistory, playing, turnOffPlaying]);

  const onShuffle = useCallback(() => {
    turnOffPlaying();
    resetStep();
    setArray(generateRandomArray(state.size, state.min, state.max));
  }, [state.size, state.min, state.max]);

  const onPrevStep = useCallback(() => {
    turnOffPlaying();
    decrement();
  }, [decrement]);

  const onNextStep = useCallback(() => {
    turnOffPlaying();
    increment();
  }, [increment]);

  const onSizeChange = useCallback((size: number) => {
    turnOffPlaying();
    setSize(size);
    resetStep();
  }, []);

  const delayMs = useMemo(() => state.delayMs, [state.delayMs]);

  return (
    <>
      <Header />
      <main className='m-2 flex flex-col justify-around lg:m-4'>
        <Visualizer
          showSteps={sortChosen}
          className={'mb-2 basis-5/6 rounded-lg lg:mb-4'}
          max={state.max}
          sortHistory={sortHistory}
          step={count}
        />
        <Menu
          id='menu'
          className='basis-1/6 rounded-lg'
          size={state.size}
          delayMs={delayMs}
          playing={playing}
          sortOptions={SORT_OPTIONS}
          showControllers={sortChosen}
          onShuffle={onShuffle}
          onPlayPause={togglePlaying}
          onSizeChange={onSizeChange}
          onDelayChange={setDelay}
          onPrevStep={onPrevStep}
          onNextStep={onNextStep}
          onSortChange={setSort}
        />
      </main>
    </>
  );
};
