import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes";
import { GlobalStyle } from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
