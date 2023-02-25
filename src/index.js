import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./global.styles";
import { Container } from "./index.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Container>
      <h1>header</h1>
    </Container>
  </React.StrictMode>
);
