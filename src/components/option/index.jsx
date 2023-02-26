import React, { Component } from "react";
import { Container } from "../../global.style";
import {
  AdvancedBtn,
  AdvancedMenu,
  ButtonsWrapper,
  FormButton,
  Input,
  InputsGroup,
  InputsWrapper,
  InputTitle,
  OptionMenu,
  OptionWrapper,
  SearchAddresInput,
  SearchBtn,
} from "./style";

export class Option extends Component {
  constructor() {
    super();
    this.state = {
      advancedShow: "none",
    };
  }
  render() {
    const openAdvanced = () => {
      this.setState({
        advancedShow: this.state.advancedShow === "none" ? "block" : "none",
      });
    };
    return (
      <OptionWrapper>
        <Container>
          <OptionMenu>
            <SearchAddresInput placeholder="Enter an address, neighborhood, city, or ZIP code" />
            <AdvancedBtn onClick={openAdvanced}>Advanced</AdvancedBtn>
            <SearchBtn searchBtn>Search</SearchBtn>
            <AdvancedMenu display={this.state.advancedShow}>
              <InputsWrapper>
                <InputTitle>Address</InputTitle>
                <InputsGroup>
                  <Input placeholder="Country" />
                  <Input placeholder="Region" />
                  <Input placeholder="City" />
                  <Input placeholder="Zip code" />
                </InputsGroup>
                <InputTitle>Apartment info</InputTitle>
                <InputsGroup>
                  <Input placeholder="Rooms" />
                  <Input placeholder="Size" />
                  <Input placeholder="Sort" />
                </InputsGroup>
                <InputTitle>Price</InputTitle>
                <InputsGroup>
                  <Input placeholder="Min price" />
                  <Input placeholder="Max price" />
                </InputsGroup>
              </InputsWrapper>
              <ButtonsWrapper>
                <FormButton type="reset">Submit</FormButton>
                <FormButton type="submit">Cancel</FormButton>
              </ButtonsWrapper>
            </AdvancedMenu>
          </OptionMenu>
        </Container>
      </OptionWrapper>
    );
  }
}
