import { fireEvent, render, screen } from '@testing-library/react';
import { Slider } from '../../../components/common/slider/Slider';
import { getRandomNumber } from '../../../lib/array';
import { faker } from '@faker-js/faker';

const onChange = jest.fn();
const className = faker.random.word();
const min = getRandomNumber(-100, 100);
const max = getRandomNumber(110, 200);
const value = Math.floor((min + max) / 2);

beforeEach(() => {
  render(
    <Slider
      id='slider_test'
      className={className}
      onChange={onChange}
      min={min}
      max={max}
      value={value}
    >
      <div id='child' />
    </Slider>,
  );
});

describe('Slider', () => {
  it('should render children', () => {
    const slider = screen.getByTestId('slider_test');
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

    expect(slider).toHaveClass(className);
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
