import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", "sans-serif";
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  img {
    display: block;
  }

  a,
  span,
  button {
    display: inline-block;
  }

  a {
    color: #fff;
  }

`;

// export const toFormat = styled.div`

// `;

export const Container = styled.div`
  color: #fff;
  max-width: 1220px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
`;
