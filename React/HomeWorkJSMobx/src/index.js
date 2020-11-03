import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import Store from "./stores/Store";
import { Provider } from 'mobx-react'


ReactDOM.render(
  <BrowserRouter>
    <Provider {...{Store}}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
