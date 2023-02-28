import { Container } from "../../../global.style";
import { Copyright, FooterBottomWrapper } from "./style";

import LogoIcon from "../../../assets/icons/logo.svg";
import { LogoIconStyle } from "../../header/style";

export const FooterBottom = () => (
  <Container>
    <FooterBottomWrapper>
      <LogoIconStyle bottom href="!#">
        <img src={LogoIcon} alt="logo" />
      </LogoIconStyle>
      <Copyright>
        Copyright © 2021 CreativeLayers. All Right Reserved.
      </Copyright>
    </FooterBottomWrapper>
  </Container>
);
