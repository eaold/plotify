import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
