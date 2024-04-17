import { screen, render } from "@testing-library/react";
import { UserList } from "../components/GetAllByQuery";

describe("UserList test", () => {
  const users = ["a", "b", "c", "d"];
  test("be data", () => {
    render(<UserList users={users} />);

    const ulEl = screen.getByRole("list");
    expect(ulEl).toBeInTheDocument();

    // getAllByRole은 요소가 없을 경우 에러가 발생한다
    const liEl = screen.getAllByRole("listitem");
    expect(liEl.length).toBe(users.length);
  });

  test("no data", () => {
    render(<UserList users={[]} />);

    const ulEl = screen.getByRole("list");
    expect(ulEl).toBeInTheDocument();

    // 요소가 없을 경우 배열로 리턴한다
    const liEl = screen.queryAllByRole("listitem");
    expect(liEl.length).toBe(0);
  });

  test("async title render", async () => {
    render(<UserList users={users} />);
    const titleEl = await screen.findByRole(
      "heading",
      { name: /users/i },
      { timeout: 2000 },
    );
    expect(titleEl).toBeInTheDocument();
  });
});
