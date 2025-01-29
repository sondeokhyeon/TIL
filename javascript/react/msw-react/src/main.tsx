import { server } from "./mocks/browsers.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MockProvder from "./MockProvider.tsx";

server.start();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MockProvder>
      <App />
    </MockProvder>
  </StrictMode>,
);
