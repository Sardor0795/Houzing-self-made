import React, { Component } from "react";
import { FooterBottom } from "./footer__bottom";
import { FooterTop } from "./footer__top";
import { FooterLine, FooterWrapper } from "./style";

export class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterTop />
        <FooterLine/>
        <FooterBottom/>
      </FooterWrapper>
    );
  }
}
