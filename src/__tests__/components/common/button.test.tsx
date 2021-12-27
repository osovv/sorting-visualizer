import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../../../components/common/button/Button";
import * as faker from "faker";

const onClick = jest.fn();
const className = faker.random.word();

beforeEach(() => {
  render(
    <Button id="button_test" onClick={onClick} className={className}>
      <div id="child" />
    </Button>
  );
  return onClick;
});

describe("Button", () => {
  it("should render children", () => {
    const button = screen.getByTestId("button_test");
    const child = screen.getByTestId("child");

    expect(button.children.length).toBe(1);
    expect(child).toBeDefined();
  });

  it("should call onClick callback", () => {
    const button = screen.getByTestId("button_test");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("should add given className to classes", () => {
    const button = screen.getByTestId("button_test");

    expect(button).toHaveClass(className);
  });
});
