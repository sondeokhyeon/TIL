import { render, screen } from "@testing-library/react";
import JoinButton from "../components/JoinButton";

test("JoinButton disable test", () => {
  render(<JoinButton age={10} />);
  // 화면에서 역할로 엘리멘트를 찾는다
  const btnEl = screen.getByRole("button");
  // 화면에서 텍스트로 엘리멘트를 찾는다
  const txtEl = screen.getByText("not allow");
  // 버튼 엘리멘트가 화면에 있는지 확인한다
  expect(btnEl).toBeInTheDocument();
  // 버튼 엘리멘트가 disabled 속성을 가지고 있는지 확인한다
  // expect(btnEl).toHaveAttribute("disabled");
  // 버튼 엘리멘트가 disabled 속성을 가지고 있는지 확인한다 대체
  expect(btnEl).toBeDisabled();
  // 텍스트 엘리멘트가 화면에 있는지 확인한다
  expect(txtEl).toBeInTheDocument();
  // 텍스트 엘리멘트가 not allow를 가지고 있는지 확인한다
  expect(txtEl).toHaveTextContent("not allow");
});

test("JoinButton enable test", () => {
  render(<JoinButton age={20} />);
  const btnEl = screen.getByRole("button");
  const txtEl = screen.getByText("Join");
  expect(btnEl).toBeInTheDocument();
  // expect(btnEl).not.toHaveAttribute("disabled");
  expect(btnEl).toBeEnabled();
  expect(txtEl).toBeInTheDocument();
  expect(txtEl).toHaveTextContent(/Join/i);
});
