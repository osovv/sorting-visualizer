import { initializeSteps, SORTS, SORTS_NAMES } from 'entities/sort';
import { SortType } from 'entities/sort/model';
import { List } from 'immutable';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { generateRandomArray } from 'shared/lib/array';
import { useCounter, useInterval, useToggle } from 'shared/lib/hooks';
import { SortHistory } from 'shared/types';

export interface SortMapping {
  name: string;
  value: (_array: number[]) => SortHistory;
}

function mapSortNameToSort(sortKey: string, sortsMapping: readonly SortType[]) {
  const sortMapping = sortsMapping.find((value) => value.name === sortKey);
  if (sortMapping !== undefined) {
    return sortMapping.sort;
  }
  return undefined;
}

export const useControls = (
  size: number,
  minSize: number,
  maxSize: number,
  setSize: (_: number) => void,
  setArray: (_: List<number>) => void,
  onReset: () => void,
  turnOffPlaying: () => void,
  increment: () => void,
  decrement: () => void,
) => {
  const onShuffle = useCallback(() => {
    turnOffPlaying();
    onReset();
    setArray(List(generateRandomArray(size, minSize, maxSize)));
  }, [turnOffPlaying, onReset, setArray, size, minSize, maxSize]);

  const onPrevStep = useCallback(() => {
    turnOffPlaying();
    decrement();
  }, [decrement, turnOffPlaying]);

  const onNextStep = useCallback(() => {
    turnOffPlaying();
    increment();
  }, [increment, turnOffPlaying]);

  const onSizeChange = useCallback(
    (size: number) => {
      turnOffPlaying();
      setSize(size);
      onReset();
    },
    [onReset, setSize, turnOffPlaying],
  );

  return {
    onShuffle,
    onSizeChange,
    onPrevStep,
    onNextStep,
    onReset,
  } as const;
};

export const useHomeState = () => {
  const [array, setArray] = useState<List<number>>(List());
  const [min] = useState(10);
  const [max] = useState(500);
  const [size, setSize] = useState(50);
  const [delayMs, setDelayMs] = useState(0);
  const [sort, setSort] = useState<
    undefined | ((_: List<number>) => SortHistory)
  >(undefined);

  const sortHistory = useMemo(() => {
    if (sort !== undefined) {
      return sort(array);
    }
    return initializeSteps(List(array));
  }, [array, sort]);

  const { value: isSortChosen, turnOn: turnOnSortChosen } = useToggle(false);

  const {
    value: isPlaying,
    toggle: onPlayPause,
    turnOff: turnOffPlaying,
  } = useToggle(false);

  const {
    count: step,
    increment,
    decrement,
    reset,
  } = useCounter(0, 0, sortHistory.size - 1);

  const onReset = useCallback(reset, [reset]);

  useInterval(
    () => {
      increment();
    },
    {
      delayMs,
      active: isPlaying,
      immediateStart: false,
    },
  );

  const onSortChange = useCallback(
    (sortName: string) => {
      const mappedSort = mapSortNameToSort(sortName, SORTS);
      if (mappedSort !== undefined) {
        turnOffPlaying();
        onReset();
        turnOnSortChosen();
        setSort(() => mappedSort);
      }
    },
    [onReset, turnOffPlaying, turnOnSortChosen],
  );

  useEffect(() => {
    if (step === sortHistory.size - 1) {
      turnOffPlaying();
    }
  }, [sortHistory.size, step, turnOffPlaying]);

  useEffect(() => {
    setArray(List(generateRandomArray(size, min, max)));
  }, [min, max, size, setArray]);

  const controls = useControls(
    size,
    min,
    max,
    setSize,
    setArray,
    onReset,
    turnOffPlaying,
    increment,
    decrement,
  );

  return [
    {
      step,
      size,
      delayMs,
      min,
      max,
      sortHistory,
      sortOptions: SORTS_NAMES,
      isSortChosen,
      isPlaying,
    },
    {
      ...controls,
      onPlayPause,
      setArray,
      setSize,
      onDelayChange: setDelayMs,
      onSortChange,
    },
  ] as const;
};
