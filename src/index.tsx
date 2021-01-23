import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DrinksWrapper } from "./context/wrappers/DrinksWrapper";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <DrinksWrapper>
    <App />,
  </DrinksWrapper>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
