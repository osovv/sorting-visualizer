import { memo } from 'react';
import { Button } from '../common/button/Button';
import { Optional } from '../../shared/ui/optional/Optional';
import { Select } from '../../shared/ui/select/Select';
import { Slider } from '../common/slider/Slider';
import { MenuEntry } from './components/MenuEntry';

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

export const Component = ({
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
}: Props) => {
  let className_ =
    'bg-base-300 menu flex-col lg:flex-row align-middle w-full justify-around overflow-visible p-4';

  if (className !== undefined) {
    className_ = className_ + ' ' + className;
  }
  return (
    <div id={id} className={className_}>
      <Optional show={showControllers}>
        <MenuEntry
          id={`${id}_play_stop_button`}
          className='mx-0 mb-4 flex-1 basis-1/6 align-middle lg:mr-4 lg:mb-auto'
        >
          <Button
            id='play_stop_button'
            className='block w-full'
            onClick={onPlayPause}
          >
            {playing ? 'stop' : 'play'}
          </Button>
        </MenuEntry>
      </Optional>

      <Optional show={showControllers}>
        <MenuEntry
          id={`${id}_shuffle_button`}
          className='mx-0 mb-4 flex-1 basis-1/6 align-middle lg:mr-4 lg:mb-auto'
        >
          <Button
            id='shuffle_button'
            className='block w-full'
            onClick={onShuffle}
          >
            {'shuffle'}
          </Button>
        </MenuEntry>
      </Optional>

      <Optional show={showControllers}>
        <MenuEntry
          className='mx-0 mb-4 flex-1 basis-1/6 align-middle lg:mr-4 lg:mb-auto'
          id={`${id}_step_buttons`}
        >
          <div className='flex w-full flex-row'>
            <Button
              id='prev_step_button'
              className='mr-1 flex-1 basis-1/2'
              onClick={onPrevStep}
            >
              {'<-'}
            </Button>

            <Button
              id='next_step_button'
              className='flex-1 basis-1/2'
              onClick={onNextStep}
            >
              {'->'}
            </Button>
          </div>
        </MenuEntry>
      </Optional>

      <MenuEntry
        id={`${id}_size_slider`}
        className='mx-0 mb-4 flex-1 basis-1/6 align-middle lg:mr-4 lg:mb-auto'
      >
        <Slider
          id='size_slider'
          className=''
          value={size}
          min={10}
          max={100}
          onChange={onSizeChange}
        >
          {'Array size : ' + size.toString()}
        </Slider>
      </MenuEntry>

      <MenuEntry
        id={`${id}_delay_slider`}
        className='mx-0 mb-4 flex-1 basis-1/6 align-middle lg:mr-4 lg:mb-auto'
      >
        <Slider
          id='delay_slider'
          className=''
          value={delayMs}
          min={0}
          max={1000}
          onChange={onDelayChange}
        >
          {'Delay : ' + delayMs.toString() + ' ms'}
        </Slider>
      </MenuEntry>

      <MenuEntry
        id={`${id}_sort_select`}
        className='mx-0 flex-1 basis-1/6 align-middle'
      >
        <Select
          id={'sort_select'}
          placeholder={'Choose sort...'}
          onChange={onSortChange}
          options={sortOptions}
          className='block w-full'
        />
      </MenuEntry>
    </div>
  );
};

export const Menu = memo<Props>(Component);
