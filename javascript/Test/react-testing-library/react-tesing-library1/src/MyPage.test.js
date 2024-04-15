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
  // 현재 엘리멘트(컴포넌트)가 화면에 렌더링 되어 있는지 확인
  expect(isLoggedIn).toBeInTheDocument();
  // 현재 엘리멘트(컴포넌트)가 화면에 렌더링 되어 있는지 확인
  expect(loginButton).toBeInTheDocument();
  expect(loginButton).toHaveTextContent("Login");
});
