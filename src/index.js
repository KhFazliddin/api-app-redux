import React from "react";
import App from "./App";
import ReactDOM, { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App tab="home" />{" "}
  </Provider>
);
