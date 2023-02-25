import React, { Component } from "react";
import { HeaderContent, HeaderWratter, Li, LoginIconStyle, LogoIconStyle, Ul } from "./index.style";
import {Container} from '../../global.styles'
import LoginIcon from '../../assets/icons/login.svg'
import LogoIcon from '../../assets/icons/logo.svg'

export class Header extends Component {
  render() {
    return <HeaderWratter>

    <Container>
        <HeaderContent>
            <LogoIconStyle href="http:#"><img src={LogoIcon} alt="logo" /></LogoIconStyle>
            <Ul>
                <Li>
                    <a href="http:#">Home</a>
                </Li>
                <Li>
                    <a href="http:#">Properties</a>
                </Li>
                <Li last>
                    <a href="http:#">Contacts</a>
                </Li>
            </Ul>
            <button><LoginIconStyle src={LoginIcon} alt="img" /></button>
        </HeaderContent>
    </Container>

    </HeaderWratter>;
  }
}
