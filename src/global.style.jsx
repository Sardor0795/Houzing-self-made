import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html {
    scroll-behavior: smooth;
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

  a, button {
    transition: opacity 0.3s ease;
    :active {
        transform: translateY(2px);
    }
    :hover {
        opacity: 0.6;
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  /* Body scroll */

  body.scroll-close::-webkit-scrollbar {
    width: 0;
  }

  body::-webkit-scrollbar {
    width: 8px; /* Mostly for vertical scrollbars */
    border-radius: 2px;
  }

  body::-webkit-scrollbar-thumb {
    /* Foreground */
    background: #0061DF;
    border-radius: 2px;
  }

  body::-webkit-scrollbar-track {
    /* Background */
    background: rgba(225, 220, 220, 0.845);
    border-radius: 2px;
  }
`;

export const toFormat = styled.div``;

export const Container = styled.div`
  color: #fff;
  max-width: 1220px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const UpButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: #0061df;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 11px;
  right: calc(50% - 665px);
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
  .show& {
    display: flex;
    opacity: 1;
    pointer-events: all;
  }
`;

export const UpButtonIcon = styled.img``;
