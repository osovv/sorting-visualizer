import React from 'react';
import { Step } from './ui/step';
import { Chart } from './ui/chart';
import { Legend } from 'widgets/legend';
import { LegendItem } from 'entities/legend_item';
import { SortHistory } from 'shared/types';

type Props = {
  sortHistory: SortHistory;
  max: number;
  step: number;
  className?: string;
  showSteps: boolean;
};

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
}: Props) => {
  let className_ = 'bg-base-300 w-full p-4 flex flex-col';

  if (className !== undefined) {
    className_ = className_ + ' ' + className;
  }

  return (
    <div id='visualizer' className={className_}>
      <Step
        step={step}
        show={showSteps}
        max={sortHistory.size - 1}
        className={'align'}
      />
      <Legend items={LEGEND_ITEMS} />
      <Chart max={max} sortHistorySteps={sortHistory} step={step} />
    </div>
  );
};
