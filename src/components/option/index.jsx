import { useState } from "react";
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

export const Option = () => {
  const [advancedBtn, setAdvancedBtn] = useState({
    opacity: "0",
    pointer_events: "none",
  });

  const openAdvanced = () => {
    setAdvancedBtn({
      opacity: advancedBtn.opacity === "0" ? "1" : "0",
      pointer_events: advancedBtn.pointer_events === "nona" ? "all" : "none",
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
            pointerEvents={advancedBtn.pointer_events}
            opacity={advancedBtn.opacity}
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
              <FormButton onClick={openAdvanced} type="reset">
                Submit
              </FormButton>
              <FormButton onClick={openAdvanced} type="submit">
                Cancel
              </FormButton>
            </ButtonsWrapper>
          </AdvancedMenu>
        </OptionMenu>
      </Container>
    </OptionWrapper>
  );
};
