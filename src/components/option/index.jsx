import React, { Component } from "react";
import { Container } from "../../global.style";
import {
  AdvancedBtn,
  OptionMenu,
  OptionWrapper,
  SearchAddresInput,
  SearchBtn,
} from "./style";

export class Option extends Component {
  render() {
    return (
      <OptionWrapper>
        <Container>
          <OptionMenu>
            <SearchAddresInput placeholder="Enter an address, neighborhood, city, or ZIP code" />
            <AdvancedBtn>Advanced</AdvancedBtn>
            <SearchBtn searchBtn>Search</SearchBtn>
          </OptionMenu>
        </Container>
      </OptionWrapper>
    );
  }
}
