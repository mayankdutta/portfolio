import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Main from "./pages/Main";
import Tools from "./pages/Tools";

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <Tools />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
