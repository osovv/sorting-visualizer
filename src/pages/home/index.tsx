import { Header } from 'widgets/header';
import { Menu } from 'widgets/menu/';
import { Visualizer } from 'widgets/visualizer';
import { useHomeState } from './lib/hooks';

export const Home = () => {
  const [
    {
      step,
      size,
      isPlaying,
      min,
      max,
      sortHistory,
      sortOptions,
      isSortChosen,
      delayMs,
    },
    controls,
  ] = useHomeState();

  return (
    <>
      <Header />
      <main className='m-2 flex flex-col justify-around lg:m-4'>
        <Visualizer
          className='mb-2 basis-5/6 rounded-lg lg:mb-4'
          showSteps={isSortChosen}
          max={max}
          sortHistory={sortHistory}
          step={step}
        />
        <Menu
          id='menu'
          className='basis-1/6 rounded-lg'
          size={size}
          minSize={min}
          maxSize={max}
          delayMs={delayMs}
          playing={isPlaying}
          sortOptions={sortOptions}
          showControllers={isSortChosen}
          {...controls}
        />
      </main>
    </>
  );
};
