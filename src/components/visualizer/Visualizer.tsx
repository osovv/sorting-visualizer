import React from "react";
import { SortHistoryStep, LegendItem } from "../../types";
import { Step } from "./components/step/Step";
import { Chart } from "./components/chart/Chart";
import { Legend } from "./components/legend/Legend";

type Props = {
  sortHistory: SortHistoryStep[];
  max: number;
  step: number;
  className?: string;
};

const LEGEND_ITEMS: LegendItem[] = [
  {
    color: "bg-base-content",
    label: "Unsorted",
  },
  {
    color: "bg-accent",
    label: "Sorted",
  },
  {
    color: "bg-secondary",
    label: "Comparing",
  },
  {
    color: "bg-primary-focus",
    label: "Swapping",
  },
];

export const Visualizer: React.FC<Props> = ({
  sortHistory,
  max,
  step,
  className,
}) => {
  let className_ = "bg-base-300 w-full p-4 flex flex-col";

  if (className !== undefined) {
    className_ = className_ + " " + className;
  }

  return (
    <div id="visualizer" className={className_}>
      <Step step={step} max={sortHistory.length - 1} className={"align"} />
      <Legend items={LEGEND_ITEMS} />
      <Chart max={max} sortHistorySteps={sortHistory} step={step} />
    </div>
  );
};
