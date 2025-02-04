import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/api", async () => {
    return HttpResponse.json({ message: "hello msw" });
  }),
];
