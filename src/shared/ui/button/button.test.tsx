import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';
import { faker } from '@faker-js/faker';
import { vi, describe, it, expect, beforeAll } from 'vitest';

const onClick = vi.fn();
const className = faker.random.word();

beforeAll(() => {
  render(
    <Button id='test' onClick={onClick} className={className}>
      <div id='child' data-testid='child' />
    </Button>,
  );
});

describe('Button', () => {
  it('should render children', () => {
    const button = screen.getByTestId('button_test');
    const child = screen.getByTestId('child');

    expect(button.children.length).toBe(1);
    expect(child).toBeDefined();
  });

  it('should call onClick callback', () => {
    const button = screen.getByTestId('button_test');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('should add given className to classes', () => {
    const button = screen.getByTestId('button_test');

    expect(button.className).toContain(className);
  });
});
