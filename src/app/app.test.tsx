import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '.';
import { getRandomNumber } from 'shared/lib/array';
import { it, expect } from 'vitest';

it('should render same amount of bars as in array size input', () => {
  const size = getRandomNumber(10, 100);

  render(<App />);
  const slider = screen.getByTestId('slider_size_slider');
  const chart = screen.getByTestId('chart');
  const bars = chart.children;

  fireEvent.change(slider, { target: { value: String(size) } });

  expect(bars.length).toEqual(size);
});
