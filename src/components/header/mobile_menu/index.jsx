import React, { Component } from "react";
import { CloseButton, MobileMenuWrapper } from "./style";

import CloseIcon from "../../../assets/icons/header_close_btn.svg";

export default class MobileMenu extends Component {
  render() {
    return (
      <MobileMenuWrapper>
        <CloseButton icon={CloseIcon}>ffff</CloseButton>
      </MobileMenuWrapper>
    );
  }
}
