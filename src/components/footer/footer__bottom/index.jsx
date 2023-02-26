import React, { Component } from "react";
import { Container } from "../../../global.style";
import { Copyright, FooterBottomWrapper } from "./style";

import LogoIcon from "../../../assets/icons/logo.svg";
import { LogoIconStyle } from "../../header/style";

export class FooterBottom extends Component {
  render() {
    return (
      <Container>
        <FooterBottomWrapper>
          <LogoIconStyle href="!#">
            <img src={LogoIcon} alt="logo" />
          </LogoIconStyle>
          <Copyright>
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </Copyright>
        </FooterBottomWrapper>
      </Container>
    );
  }
}
