import { LegendItem } from 'entities/legend_item';
import { SortHistory } from 'shared/types';
import { Legend } from 'widgets/legend';
import { Chart } from './ui/chart';
import { Step } from './ui/step';

export interface VisualizerProps {
  sortHistory: SortHistory;
  max: number;
  step: number;
  className?: string;
  showSteps: boolean;
}

const LEGEND_ITEMS: LegendItem[] = [
  {
    color: 'bg-base-content',
    label: 'Unsorted',
  },
  {
    color: 'bg-accent',
    label: 'Sorted',
  },
  {
    color: 'bg-secondary',
    label: 'Comparing',
  },
  {
    color: 'bg-primary-focus',
    label: 'Swapping',
  },
];

export const Visualizer = ({
  sortHistory,
  max,
  step,
  className,
  showSteps,
}: VisualizerProps) => {
  let cn = 'bg-base-300 w-full p-4 flex flex-col';

  if (className !== undefined) {
    cn = cn + ' ' + className;
  }

  return (
    <div id='visualizer' className={cn}>
      <Step
        step={step}
        show={showSteps}
        max={sortHistory.size - 1}
        className='align'
      />
      <Legend items={LEGEND_ITEMS} />
      <Chart max={max} sortHistorySteps={sortHistory} step={step} />
    </div>
  );
};
