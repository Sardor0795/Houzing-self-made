import React, { Component } from "react";
import {
  BurgerButton,
  HeaderContent,
  HeaderWrapper,
  Li,
  LoginButtonStyle,
  LoginIconStyle,
  LogoIconStyle,
  Ul,
} from "./style";
import { Container } from "../../global.style";
import LoginIcon from "../../assets/icons/login.svg";
import LogoIcon from "../../assets/icons/logo.svg";
import BurgerButtonIcon from "../../assets/icons/header_burger.svg";
import {MobileMenu} from "./mobile_menu";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      openMobileMenu: null,
    };
  }
  render() {
    const openMobileMenu = () => {
      this.setState({
        openMobileMenu: this.state.openMobileMenu === "open" ? null : "open",
      });
    };
    return (
      <HeaderWrapper className="header">
        <Container>
          <HeaderContent>
            <BurgerButton
              onClick={openMobileMenu}
              icon={BurgerButtonIcon}
              bgImg={this.state.openMobileMenu}
            ></BurgerButton>
            <LogoIconStyle href="!#">
              <img src={LogoIcon} alt="logo" />
            </LogoIconStyle>
            <Ul>
              <Li>
                <a href="!#">Home</a>
              </Li>
              <Li>
                <a href="!#">Properties</a>
              </Li>
              <Li last>
                <a href="!#">Contacts</a>
              </Li>
            </Ul>
            <LoginButtonStyle>
              <LoginIconStyle src={LoginIcon} alt="img" />
              Login
            </LoginButtonStyle>
          </HeaderContent>
        </Container>
        <MobileMenu menu={this.state.openMobileMenu} />
      </HeaderWrapper>
    );
  }
}
