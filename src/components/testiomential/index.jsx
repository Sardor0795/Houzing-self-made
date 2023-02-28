import { Container, SectionText, SectionTitle } from "../../global.style";
import { TestCard } from "../cards/test_card";

import { MainCardsWrapper } from "../recomend/style";
import { TestiomentalWrapper } from "./style";

export const Testiomental = () => (
  <TestiomentalWrapper>
    <Container>
      <SectionTitle>Testimonials</SectionTitle>
      <SectionText>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </SectionText>
      <MainCardsWrapper>
        <TestCard/>
        <TestCard/>
        <TestCard/>
      </MainCardsWrapper>
    </Container>
  </TestiomentalWrapper>
);
