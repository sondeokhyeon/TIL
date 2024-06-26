import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
createRoot(container).render(<App />); // createRoot(container!) if you use TypeScript
