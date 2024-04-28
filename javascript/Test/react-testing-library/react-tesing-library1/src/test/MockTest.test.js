import TodoList from "../components/MockTest";
import { render, screen } from "@testing-library/react";

describe("MockTest", () => {
  test("todo Title", () => {
    render(<TodoList />);
    const titleEl = screen.getByText(/TODO/i);
    expect(titleEl).toBeInTheDocument();
  });

  test("TodoList 3 items render", async () => {
    render(<TodoList />);
    const list = await screen.findAllByRole("listitem");
    expect(list).toHaveLength(3);
  });
});
