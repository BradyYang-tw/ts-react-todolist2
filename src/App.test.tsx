import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component testing", () => {
  test("renders learn react link", () => {
    // arrange
    render(<App />);

    // action

    // assert
    const linkElement = screen.getByText(/ToDo List/i);
    const linkElement2 = screen.getByText(
      /A Simple todolist built react hooks & context/i
    );
    expect(linkElement).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
  });

  test("renders learn react button", () => {
    // arrange
    render(<App />);

    // action

    // assert
    const buttonElement2 = screen.getByText("0 item(s)");
    expect(buttonElement2).toBeInTheDocument();
  });

  test("renders learn react button click", () => {
    // arrange
    render(<App />);

    // action
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const buttonElement3 = screen.getByText("1 item(s)");
    expect(buttonElement3).toBeInTheDocument();
  });

  test("input some value", () => {
    // arrange
    render(<App />);

    // action
    const todoInput = screen.getByTestId("test-app-input");
    fireEvent.change(todoInput, { target: { value: "todo1" } });

    // assert
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(screen.getByText("todo1")).toBeInTheDocument();
    expect(todoInput).toHaveValue("");
  });
});
