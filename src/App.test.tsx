import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("should render the title of the project", () => {
    render(<App />);
    const title = screen.getByRole("heading", {
      name: /react testing library/i,
    });
    expect(title).toBeInTheDocument();
  });
});

test("button change its label", async () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });
  await userEvent.click(button);
  screen.logTestingPlaygroundURL();
  expect(button).toHaveTextContent("Change to red");
});

it("should enable the button when the checkbox is checked", async () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
  await userEvent.click(checkbox);
  expect(button).toBeDisabled();
});
