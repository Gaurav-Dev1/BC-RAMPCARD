import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("renders button", () => {
  render(<App />);
  
  const testIcon = screen.getByTestId("app");
  expect(testIcon).toBeInTheDocument();
});
