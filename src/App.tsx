import React, { useCallback, useEffect } from "react";
import { BubbleSort } from "./algorithms/bubble_sort";
import { Button } from "./components/common/button/Button";
import { Header } from "./components/header/Header";
import { Slider } from "./components/slider/Slider";
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

  const setSize = useCallback((size: string) => {
    const size_ = parseInt(size);
    setState((s) => {
      return { ...s, size: size_ };
    });
  }, []);

  const setDelay = useCallback((delay: string) => {
    const delay_ = parseInt(delay);
    setState((s) => {
      return { ...s, delayMs: delay_ };
    });
  }, []);

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

  useEffect(() => {
    if (step === sortHistory.length - 1) {
      turnOffPlaying();
    }
  }, [step, sortHistory, playing, turnOffPlaying]);

  return (
    <>
      <Header />
      <main className="text-center flex">
        <Menu>


          <MenuEntry>
            <Button 
              id="playbutton" 
              className="m-1 mt-3 w-[9vw]"
              onClick={togglePlaying}
            >
                {playing ? "stop" : "play"}
            </Button>
          </MenuEntry>


          <MenuEntry>
            <Button
              id="shuffle_button"
              className="m-1 mt-3 w-[9vw]"
              onClick={() => {
                setArray(generateRandomArray(state.size, state.min, state.max));
                turnOffPlaying();
                resetStep();
              }}
            >
            {"shuffle"}
            </Button>
          </MenuEntry>


          <MenuEntry className="flex flex-row  mt-2">
            <Button
              id="prev_step_button"
              className="m-2 flex flex-row w-[4vw]"
              onClick={() => {
                turnOffPlaying();
                decStep();
              }}
            >
              {"<-"}
            </Button>
 
            <Button
              id="next_step_button"
              className="m-2 flex flex-row w-[4vw]"
              onClick={() => {
                turnOffPlaying();
                incStep();
              }}
              >
              {"->"}
            </Button>
          </MenuEntry>

          <MenuEntry >
            <Slider
              id = "slider_array_size"
              value={state.size}
              min={10}
              max={100}
              onChange={(e) => {
                setSize(e.target.value);
                resetStep();
                turnOffPlaying();
              }}
            >
              {"Array size : " + state.size}
            </Slider>
          </MenuEntry>

          <MenuEntry >
            <Slider
              id = "slider_time_change"
              value={state.delayMs}
              min={0}
              max={1000}
              onChange={(e) => {
                setDelay(e.target.value);
              }}
            >
              {"Delay : " + state.delayMs + " ms"}
            </Slider>
          </MenuEntry>



        </Menu>      

        <Visualizer max={state.max} sortHistory={sortHistory} step={step} />

      </main>
    </>
  );
}
export default App;