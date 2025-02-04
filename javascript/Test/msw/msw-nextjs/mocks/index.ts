import { createMiddleware } from "@mswjs/http-middleware";
import cors from "cors";
import express from "express";
import { handlers } from "./handlers";

const app = express();
const port = 9090; // Mock 서버 포트

app.use(
  cors({
    origin: "http://localhost:3000", // 클라이언트 주소
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(createMiddleware(...handlers)); // MSW 핸들러 연결

app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
