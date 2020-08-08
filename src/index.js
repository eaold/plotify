import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes";
import { GlobalStyle } from "./styles/Global";
import store from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouter />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
