import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: "Buy milk", complted: true },
        { id: 2, title: "Homework", complted: true },
        { id: 3, title: "cleaning", complted: true },
      ]),
    );
  }),
];
