import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

test("My Page login status", () => {
  render(<MyPage user={{ name: "mike" }} />);
  const isLoggedIn = screen.getByText(/Welcome, mike!/i);
  expect(isLoggedIn).toBeInTheDocument();
});

test("My Page not login status", () => {
  render(<MyPage />);
  const isLoggedIn = screen.getByText(/you are not logged in/i);
  const loginButton = screen.getByRole("button", { name: /login/i });
  expect(isLoggedIn).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(loginButton).toHaveTextContent("Login");
});
