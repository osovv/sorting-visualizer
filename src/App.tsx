import React, { useCallback, useEffect } from "react";
import { BubbleSort } from "./algorithms/bubble_sort";
import { Button } from "./components/common/button/Button";
import { Header } from "./components/header/Header";
import { Menu, MenuEntry } from "./components/menu/Menu";
import { Visualizer } from "./components/visualizer/Visualizer";
import { useCounter, useInterval, useToggle } from "./hooks/custom_hooks";
import { AppState } from "./types";
import { generateRandomArray } from "./utils/array";

function App() {
  const [state, setState] = React.useState<AppState>({
    array: [],
    min: 10,
    max: 100,
    size: 25,
    delayMs: 0,
    sort: BubbleSort,
  });

  const setArray = useCallback(
    (array: number[]) =>
      setState((s) => {
        return { ...s, array: array };
      }),
    []
  );

  const sortHistory = state.sort(state.array);

  const [step, incStep, decStep, rstStep] = useCounter(
    0,
    0,
    sortHistory.length - 1
  );

  const resetStep = useCallback(rstStep, []);

  useEffect(() => {
    setArray(generateRandomArray(state.size, state.min, state.max));
  }, [state.min, state.max, state.size, setArray, resetStep]);

  const [playing, togglePlaying, , turnOffPlaying] = useToggle(false);

  useInterval(
    () => {
      incStep();
    },
    state.delayMs,
    playing,
    false
  );

  return (
    <>
      <Header />
      <main className="text-center flex">
        <Menu>


          <MenuEntry>
            <Button 
              id="playbutton" 
              className="m-1"
              onClick={togglePlaying}
            >
                {playing ? "stop" : "play"}
            </Button>
          </MenuEntry>


          <MenuEntry>
            <Button
              id="shuffle_button"
              className="m-1"
              onClick={() => {
                setArray(generateRandomArray(state.size, state.min, state.max));
                turnOffPlaying();
                resetStep();
              }}
            >
            {"shuffle"}
            </Button>
          </MenuEntry>


          <MenuEntry>
            <div className="flex flex-row">
            <Button
              id="prev_step_button"
              className="m-1 flex flex-row items-center"
              onClick={() => {
                turnOffPlaying();
                decStep();
              }}
            >
              {"<-"}
            </Button>
 
            <Button
              id="next_step_button"
              className="m-1 flex flex-row"
              onClick={() => {
                turnOffPlaying();
                incStep();
              }}
              >
              {"->"}
            </Button>
            </div>
          </MenuEntry>

        </Menu>      

        <Visualizer max={state.max} sortHistory={sortHistory} step={step} />

      </main>
    </>
  );
}
export default App;