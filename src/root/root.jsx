import React, { Component } from "react";
import { UpButton, UpButtonIcon } from "../global.style";
import { Home } from "../pages/home";

import UpArrowIcon from "../assets/icons/up_arrow.svg";

setInterval(() => {
  if (document.querySelector(".upButton")) {
    document.querySelector(".upButton").classList.remove("show");
  }
}, 5000);

export class Root extends Component {
  render() {
    const toTop = () => {
      window.scroll(0, 0);
    };

    window.onscroll = () => {
      console.log(window.screenTop);
      if (document.querySelector(".upButton")) {
        document.querySelector(".upButton").classList.add("show");
      }
    };

    return (
      <>
        <Home />
        <UpButton className="upButton" onClick={toTop}>
          <UpButtonIcon src={UpArrowIcon} alt="img" />
        </UpButton>
      </>
    );
  }
}
