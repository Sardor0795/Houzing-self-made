import React, { Component } from "react";
import { Container } from "../../global.style";
import { ChooseCard, ChooseCards, ChooseCardText, ChooseCardTitle, ChooseText, ChooseTitle, ChooseWrapper } from "./style";

import ChooseSmileImg from '../../assets/icons/shoose_smile.svg'
import ChooseHomeImg from '../../assets/icons/shoose_home.svg'
import ChoosePhoneImg from '../../assets/icons/shoose_phone.svg'
import ChooseMapImg from '../../assets/icons/shoose_map.svg'

export class Choose extends Component {
  render() {
    return (
      <ChooseWrapper>
        <Container>
          <ChooseTitle>Why Choose Us</ChooseTitle>
          <ChooseText>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </ChooseText>
          <ChooseCards>
            <ChooseCard mBottom cardIcon={ChooseSmileImg}>
                <ChooseCardTitle>Trusted By Thousands</ChooseCardTitle>
                <ChooseCardText>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</ChooseCardText>
            </ChooseCard>
            <ChooseCard mBottom cardIcon={ChooseHomeImg} large>
                <ChooseCardTitle>Wide Renge Of Properties</ChooseCardTitle>
                <ChooseCardText>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</ChooseCardText>
            </ChooseCard>
            <ChooseCard cardIcon={ChoosePhoneImg}>
                <ChooseCardTitle>Financing Made Easy</ChooseCardTitle>
                <ChooseCardText>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</ChooseCardText>
            </ChooseCard>
            <ChooseCard cardIcon={ChooseMapImg}>
                <ChooseCardTitle>See Neighborhoods</ChooseCardTitle>
                <ChooseCardText>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</ChooseCardText>
            </ChooseCard>
          </ChooseCards>
        </Container>
      </ChooseWrapper>
    );
  }
}
