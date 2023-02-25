import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./global.style";
import { Root } from "./root/root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Root />
  </React.StrictMode>
);
