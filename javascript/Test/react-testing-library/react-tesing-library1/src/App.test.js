import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("logo is present", () => {
  render(<App />);
  const logo = screen.getByAltText("logo");
  expect(logo).toBeInTheDocument();
});
