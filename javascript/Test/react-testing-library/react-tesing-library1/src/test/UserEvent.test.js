import { screen, render, waitFor, act } from "@testing-library/react";
import { Login } from "../components/UserEvent";
import userEvent from "@testing-library/user-event";

describe("UserEvent test", () => {
  test("button render", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
const user = userEvent.setup();
test("button click", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  act(() => {
    user.click(buttonEl);
  });
  await waitFor(() => {
    expect(buttonEl).toHaveTextContent("Logout");
  });
});

test("button keyboard click", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  act(() => {
    user.tab(); // focus
    user.keyboard(" ");
  });
  await waitFor(() => {
    expect(buttonEl).toHaveTextContent("Logout");
  });
});
