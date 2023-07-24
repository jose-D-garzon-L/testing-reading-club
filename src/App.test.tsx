import { render, screen } from "@testing-library/react";
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
