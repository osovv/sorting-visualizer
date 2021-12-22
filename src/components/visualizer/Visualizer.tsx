import React from "react";
import { SortHistoryStep, LegendItem } from "../../types";
import { Step } from "./components/step/Step";
import { Chart } from "./components/chart/Chart";
import { Legend } from "./components/legend/Legend";

type Props = {
  sortHistory: SortHistoryStep[];
  max: number;
  step: number;
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

export const Visualizer: React.FC<Props> = ({ sortHistory, max, step }) => {
  return (
    <div id="visualizer">
      <Step step={step} max={sortHistory.length - 1} />
      <Legend items={LEGEND_ITEMS} />
      <Chart max={max} sortHistorySteps={sortHistory} step={step} />
    </div>
  );
};
