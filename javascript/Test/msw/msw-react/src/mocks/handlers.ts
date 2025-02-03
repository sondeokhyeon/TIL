import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/", async () => {
    return HttpResponse.json({ message: "hello world" });
  }),
];

// async function sleep(timeout: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, timeout);
//   });
// }
