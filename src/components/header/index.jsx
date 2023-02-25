import React, { Component } from "react";
import {
  HeaderContent,
  HeaderWratter,
  Li,
  LoginIconStyle,
  LogoIconStyle,
  Ul,
} from "./style";
import { Container } from "../../global.style";
import LoginIcon from "../../assets/icons/login.svg";
import LogoIcon from "../../assets/icons/logo.svg";

export class Header extends Component {
  render() {
    return (
      <HeaderWratter>
        <Container>
          <HeaderContent>
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
            <button>
              <LoginIconStyle src={LoginIcon} alt="img" />
            </button>
          </HeaderContent>
        </Container>
      </HeaderWratter>
    );
  }
}
