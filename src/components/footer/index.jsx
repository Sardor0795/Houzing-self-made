import React, { Component } from "react";
import { FooterTop } from "./footer__top";
import { FooterWrapper } from "./style";

export class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterTop />
      </FooterWrapper>
    );
  }
}
