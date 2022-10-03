import { fireEvent, render, screen } from '@testing-library/react';
import { Slider } from '.';
import { getRandomNumber } from '../../../lib/array';
import { faker } from '@faker-js/faker';
import { vi } from 'vitest';
import { describe, it, expect, beforeAll } from 'vitest';

const onChange = vi.fn();
const className = faker.random.word();
const min = getRandomNumber(-100, 100);
const max = getRandomNumber(110, 200);
const value = Math.floor((min + max) / 2);

beforeAll(() => {
  render(
    <Slider
      id='test'
      className={className}
      onChange={onChange}
      min={min}
      max={max}
      value={value}
    >
      <div id='child' data-testid='child' />
    </Slider>,
  );
});

describe('Slider', () => {
  it('should render children', () => {
    const child = screen.getByTestId('child');

    expect(child).toBeDefined();
  });

  it('should call onChange callback', () => {
    const slider = screen.getByTestId('slider_test');

    fireEvent.input(slider, { target: { value: String(value + 1) } });
    expect(onChange).toHaveBeenCalledWith(value + 1);
  });

  it('should add given className to classes', () => {
    const slider = screen.getByTestId('slider_test');

    expect(slider.className).toContain(className);
  });

  it('should not accept inputs lower than min', () => {
    const slider = screen.getByTestId('slider_test');

    fireEvent.input(slider, { target: { value: String(min - 100) } });
    expect(onChange).toHaveBeenCalledWith(min);
  });

  it('should not accept inputs bigger than max', () => {
    const slider = screen.getByTestId('slider_test');

    fireEvent.input(slider, { target: { value: String(max + 100) } });
    expect(onChange).toHaveBeenCalledWith(max);
  });
});
