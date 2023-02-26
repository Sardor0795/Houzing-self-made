import React, { Component } from "react";
import { UpButton, UpButtonIcon } from "../global.style";
import { Home } from "../pages/home";

import UpArrowIcon from "../assets/icons/up_arrow.svg";

export class Root extends Component {
  
  render() {
    return (
      <>
        <Home />
        <UpButton>
          <UpButtonIcon src={UpArrowIcon} alt="img" />
        </UpButton>
      </>
    );
  }
}
