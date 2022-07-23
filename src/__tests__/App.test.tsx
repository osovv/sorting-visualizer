import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { getRandomNumber } from "../lib/array";

it("should render same amount of bars as in array size input", () => {
  const size = getRandomNumber(10, 100);

  render(<App />);
  const slider = screen.getByTestId("size_slider");
  const chart = screen.getByTestId("chart");
  const bars = chart.children;

  fireEvent.change(slider, { target: { value: String(size) } });

  expect(bars.length).toEqual(size);
});
