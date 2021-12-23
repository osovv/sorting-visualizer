import React, { useCallback, useEffect, useMemo } from "react";
import { CoctailShakerSort } from "./algorithms";
import { Button } from "./components/common/button/Button";
import { Header } from "./components/header/Header";
import { Visualizer } from "./components/visualizer/Visualizer";
import { useCounter, useInterval, useToggle } from "./hooks/custom_hooks";
import { AppState } from "./types";
import { generateRandomArray } from "./utils/array";

function App() {
  const [state, setState] = React.useState<AppState>({
    array: [],
    min: 10,
    max: 100,
    size: 20,
    delayMs: 0,
    sort: CoctailShakerSort,
  });

  const setArray = useCallback(
    (array: number[]) =>
      setState((s) => {
        return { ...s, array: array };
      }),
    []
  );

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
      <main>
        <Button id="play_pause_button" className="mr-5" onClick={togglePlaying}>
          {playing ? "stop" : "play"}
        </Button>

        <Button
          id="shuffle_button"
          className="mr-5"
          onClick={() => {
            setArray(generateRandomArray(state.size, state.min, state.max));
            turnOffPlaying();
            resetStep();
          }}
        >
          {"shuffle"}
        </Button>

        <Button
          id="prev_step_button"
          className="mr-5"
          onClick={() => {
            turnOffPlaying();
            decStep();
          }}
        >
          {"<-"}
        </Button>

        <Button
          id="next_step_button"
          onClick={() => {
            turnOffPlaying();
            incStep();
          }}
        >
          {"->"}
        </Button>

        <Visualizer max={state.max} sortHistory={sortHistory} step={step} />
      </main>
    </>
  );
}

export default App;
