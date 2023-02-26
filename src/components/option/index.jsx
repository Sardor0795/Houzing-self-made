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
      advancedBtn: {
        opacity: "0",
        pointer_events: "none",
      },
    };
  }
  render() {
    const openAdvanced = () => {
      this.setState({
        advancedBtn: {
          opacity: this.state.advancedBtn.opacity === "0" ? "1" : "0",
          pointer_events:
            this.state.advancedBtn.pointer_events === "nona" ? "all" : "none",
        },
      });
    };
    return (
      <OptionWrapper>
        <Container>
          <OptionMenu>
            <SearchAddresInput placeholder="Enter an address, neighborhood, city, or ZIP code" />
            <AdvancedBtn onClick={openAdvanced}>Advanced</AdvancedBtn>
            <SearchBtn searchBtn>Search</SearchBtn>
            <AdvancedMenu
              pointerEvents={this.state.advancedBtn.pointer_events}
              opacity={this.state.advancedBtn.opacity}
            >
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
                <FormButton onClick={openAdvanced} type="submit">
                  Cancel
                </FormButton>
              </ButtonsWrapper>
            </AdvancedMenu>
          </OptionMenu>
        </Container>
      </OptionWrapper>
    );
  }
}
