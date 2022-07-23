import React from "react";
import { Button } from "../common/button/Button";
import { Optional } from "../common/Optional";
import { Select } from "../common/select/Select";
import { Slider } from "../common/slider/Slider";
import { MenuEntry } from "./components/MenuEntry";

type Props = {
  id: string;
  className?: string;
  size: number;
  delayMs: number;
  playing: boolean;
  sortOptions: string[];
  showControllers: boolean;
  onShuffle: () => void;
  onPlayPause: () => void;
  onPrevStep: () => void;
  onNextStep: () => void;
  onDelayChange: (_delayMs: number) => void;
  onSizeChange: (_size: number) => void;
  onSortChange: (_option: string) => void;
};

export const Component: React.FC<Props> = ({
  id,
  className,
  size,
  delayMs,
  playing,
  sortOptions,
  showControllers,
  onShuffle,
  onPlayPause,
  onPrevStep,
  onNextStep,
  onDelayChange,
  onSizeChange,
  onSortChange,
}) => {
  let className_ =
    "bg-base-300 menu flex-col lg:flex-row align-middle w-full justify-around overflow-visible p-4";

  if (className !== undefined) {
    className_ = className_ + " " + className;
  }
  return (
    <div id={id} className={className_}>
      <Optional show={showControllers}>
        <MenuEntry
          id={`${id}_play_stop_button`}
          className="basis-1/6 align-middle flex-1 mx-0 mb-4 lg:mr-4 lg:mb-auto"
        >
          <Button
            id="play_stop_button"
            className="w-full block"
            onClick={onPlayPause}
          >
            {playing ? "stop" : "play"}
          </Button>
        </MenuEntry>
      </Optional>

      <Optional show={showControllers}>
        <MenuEntry
          id={`${id}_shuffle_button`}
          className="basis-1/6 align-middle flex-1 mx-0 mb-4 lg:mr-4 lg:mb-auto"
        >
          <Button
            id="shuffle_button"
            className="w-full block"
            onClick={onShuffle}
          >
            {"shuffle"}
          </Button>
        </MenuEntry>
      </Optional>

      <Optional show={showControllers}>
        <MenuEntry
          className="basis-1/6 flex-1 align-middle mx-0 mb-4 lg:mr-4 lg:mb-auto"
          id={`${id}_step_buttons`}
        >
          <div className="flex flex-row w-full">
            <Button
              id="prev_step_button"
              className="basis-1/2 flex-1 mr-1"
              onClick={onPrevStep}
            >
              {"<-"}
            </Button>

            <Button
              id="next_step_button"
              className="basis-1/2 flex-1"
              onClick={onNextStep}
            >
              {"->"}
            </Button>
          </div>
        </MenuEntry>
      </Optional>

      <MenuEntry
        id={`${id}_size_slider`}
        className="basis-1/6 align-middle flex-1 mx-0 mb-4 lg:mr-4 lg:mb-auto"
      >
        <Slider
          id="size_slider"
          className=""
          value={size}
          min={10}
          max={100}
          onChange={onSizeChange}
        >
          {"Array size : " + size}
        </Slider>
      </MenuEntry>

      <MenuEntry
        id={`${id}_delay_slider`}
        className="basis-1/6 align-middle flex-1 mx-0 mb-4 lg:mr-4 lg:mb-auto"
      >
        <Slider
          id="delay_slider"
          className=""
          value={delayMs}
          min={0}
          max={1000}
          onChange={onDelayChange}
        >
          {"Delay : " + delayMs + " ms"}
        </Slider>
      </MenuEntry>

      <MenuEntry
        id={`${id}_sort_select`}
        className="basis-1/6 align-middle flex-1 mx-0"
      >
        <Select
          id={"sort_select"}
          placeholder={"Choose sort..."}
          onChange={onSortChange}
          options={sortOptions}
          className="w-full block"
        />
      </MenuEntry>
    </div>
  );
};

export const Menu = React.memo(Component);
