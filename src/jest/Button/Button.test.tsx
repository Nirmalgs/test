// src/components/Button/Button.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import VButton from "@/components/VButton";

describe("Button component", () => {
  test("renders button with label", () => {
    render(<VButton label="Click Me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<VButton label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies primary styles by default", () => {
    render(<VButton label="Click Me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass("bg-blue-500");
  });

  test("applies custom background color", () => {
    render(<VButton label="Click Me" backgroundColor="red" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
  });

  test("applies correct size classes", () => {
    const { rerender } = render(<VButton label="Click Me" size="small" />);
    let buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass("py-1 px-2 text-sm");

    rerender(<VButton label="Click Me" size="large" />);
    buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass("py-3 px-6 text-lg");
  });
});
