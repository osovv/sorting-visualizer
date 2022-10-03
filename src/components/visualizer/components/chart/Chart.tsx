import React from 'react';
import { SortHistory, SortHistoryStep, ElementStatus } from 'shared/types';
import { Bar } from './components/bar/Bar';

type Props = {
  max: number;
  sortHistorySteps: SortHistory;
  step: number;
};

const getElementStatus = (index: number, sortHistoryStep: SortHistoryStep) => {
  let barStatus: ElementStatus;
  if (sortHistoryStep.swapping.includes(index)) {
    barStatus = 'swapping';
  } else if (sortHistoryStep.sorted.includes(index)) {
    barStatus = 'sorted';
  } else if (sortHistoryStep.comparing.includes(index)) {
    barStatus = 'comparing';
  } else barStatus = 'waiting';
  return barStatus;
};

export const Chart = ({ max, sortHistorySteps, step }: Props) => {
  const array = sortHistorySteps[step].array;
  const size = array.length;
  return (
    <div
      id='chart'
      data-testid='chart'
      className='flex h-[50vh] flex-row items-end'
    >
      {array.map((value, index) => {
        const width = 100 / size;
        const height = (value / max) * 100;

        const marginRight = index === size ? 'mr-0' : 'mr-[0.1rem]';
        const className = marginRight;

        const status = getElementStatus(index, sortHistorySteps[step]);

        return (
          <Bar
            id={`bar[${index}]`}
            width={width}
            height={height}
            className={className}
            key={index}
            status={status}
          />
        );
      })}
    </div>
  );
};
