import React, { useCallback, useEffect, useMemo } from "react";
import { BubbleSort, CoctailShakerSort } from "./algorithms";
import { Header } from "./components/header/Header";
import { Menu } from "./components/menu/Menu";
import { Visualizer } from "./components/visualizer/Visualizer";
import { useCounter, useInterval, useToggle } from "./hooks/custom_hooks";
import { AppState, SortMapping } from "./types";
import { generateRandomArray } from "./utils/array";
import { mapSortNameToSort } from "./utils/sorts";

const SORTS_MAPPING: SortMapping[] = [
  {
    name: "Bubble Sort",
    value: BubbleSort,
  },
  {
    name: "Coctail Shaker Sort",
    value: CoctailShakerSort,
  },
];

const SORT_OPTIONS = SORTS_MAPPING.map((mapping) => {
  return mapping.name;
});

function App() {
  const [state, setState] = React.useState<AppState>({
    array: [],
    min: 10,
    max: 100,
    size: 50,
    delayMs: 0,
    sort: CoctailShakerSort,
  });

  const [sortChosen, , turnOnSortChosen] = useToggle(false);

  const setArray = useCallback(
    (array: number[]) =>
      setState((s) => {
        return { ...s, array: array };
      }),
    []
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

  const setSort = (sortName: string) => {
    const sort = mapSortNameToSort(sortName, SORTS_MAPPING);
    if (sort !== undefined) {
      turnOffPlaying();
      resetStep();
      turnOnSortChosen();
      setState((s) => {
        return { ...s, sort: sort };
      });
    }
  };

  const sortHistory = useMemo(
    () => state.sort(state.array),
    [state.array, state.sort]
  );

  const [step, incStep, decStep, rstStep] = useCounter(
    0,
    0,
    sortHistory.length - 1
  );

  const resetStep = useCallback(rstStep, []);

  useEffect(() => {
    setArray(generateRandomArray(state.size, state.min, state.max));
  }, [state.min, state.max, state.size, setArray]);

  const [playing, togglePlaying, , turnOffPlaying] = useToggle(false);

  useInterval(
    () => {
      incStep();
    },
    state.delayMs,
    playing,
    false
  );

  useEffect(() => {
    if (step === sortHistory.length - 1) {
      turnOffPlaying();
    }
  }, [step, sortHistory, playing, turnOffPlaying]);

  return (
    <>
      <Header />
      <main className="flex flex-col m-2 justify-around lg:m-4">
        <Visualizer
          showSteps={sortChosen}
          className={"basis-5/6 rounded-lg mb-2 lg:mb-4"}
          max={state.max}
          sortHistory={sortHistory}
          step={step}
        />
        <Menu
          id="menu"
          className="basis-1/6 rounded-lg"
          size={state.size}
          delayMs={state.delayMs}
          playing={playing}
          sortOptions={SORT_OPTIONS}
          onShuffle={() => {
            turnOffPlaying();
            resetStep();
            setArray(generateRandomArray(state.size, state.min, state.max));
          }}
          onPlayPause={togglePlaying}
          onSizeChange={(size: number) => {
            turnOffPlaying();
            setSize(size);
            resetStep();
          }}
          onDelayChange={(delayMs: number) => setDelay(delayMs)}
          onPrevStep={() => {
            turnOffPlaying();
            decStep();
          }}
          onNextStep={() => {
            turnOffPlaying();
            incStep();
          }}
          onSortChange={setSort}
        />
      </main>
    </>
  );
}
export default App;
