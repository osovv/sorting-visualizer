import React, { useCallback, useEffect, useMemo } from "react";
<<<<<<< HEAD
import { CoctailShakerSort } from "./algorithms";
=======
//import { BubbleSort } from "./algorithms/bubble_sort";
>>>>>>> c810685 (Compose Menu)
import { Button } from "./components/common/button/Button";
import { Header } from "./components/header/Header";
import { Slider } from "./components/slider/Slider";
import { Menu, MenuEntry } from "./components/menu/Menu";
import { Visualizer } from "./components/visualizer/Visualizer";
import { useCounter, useInterval, useToggle } from "./hooks/custom_hooks";
import { AppState } from "./types";
import { generateRandomArray } from "./utils/array";
import { CoctailShakerSort } from "./algorithms";


function App() {

  const [state, setState] = React.useState<AppState>({
    array: [],
    min: 10,
    max: 100,
<<<<<<< HEAD
    size: 20,
=======
    size: 50,
>>>>>>> c810685 (Compose Menu)
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

<<<<<<< HEAD
=======
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

>>>>>>> c810685 (Compose Menu)
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
      <main className="text-center flex">
        <Menu id="menubar">


          <MenuEntry id={"playbutton_element"}>
            <Button 
              id="playbutton" 
              className="m-1 mt-3 w-[9vw]"
              onClick={togglePlaying}
            >
                {playing ? "stop" : "play"}
            </Button>
          </MenuEntry>


          <MenuEntry id={"shuffle_element"}>
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


          <MenuEntry className="flex flex-row  mt-2" id="step_buttons_element">
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

          <MenuEntry id="slider_size_element">
            <Slider
              id="slider_array_size" 
              value={state.size}
              min={10}
              max={100}  
              onChange={(size: number) => {
                setSize(size)
                resetStep();
                turnOffPlaying();
              }}           
            >
              {"Array size : " + state.size}
            </Slider>
          </MenuEntry>

          <MenuEntry id="slider_delay_element">
            <Slider
              id = "slider_delay_change"
              value={state.delayMs}
              min={0}
              max={1000}
              onChange={(size: number) => {
                setDelay(size)
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
