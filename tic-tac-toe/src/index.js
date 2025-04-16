// Tutorial: Tic-Tac-Toe : https://react.dev/learn/tutorial-tic-tac-toe
// for React 19

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);