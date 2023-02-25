import React, { Component } from "react";
import { HeaderContent, HeaderWratter, Li, Ul } from "./index.style";
import {Container} from '../../global.styles'

export class Header extends Component {
  render() {
    return <HeaderWratter>

    <Container>
        <HeaderContent>
            <span>Logo</span>
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
            <button>Login</button>
        </HeaderContent>
    </Container>

    </HeaderWratter>;
  }
}
