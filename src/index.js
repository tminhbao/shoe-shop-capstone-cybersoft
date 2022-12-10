import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
// Setup Redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);
