import { RecommendWrapper } from "./style";
import { Container, SectionText, SectionTitle } from "../../global.style";
import { MainCard } from "../cards/main_card";

export const Recommend = () => (
  <RecommendWrapper>
    <Container>
      <SectionTitle>Recommended</SectionTitle>
      <SectionText>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </SectionText>
      <MainCard/>
    </Container>
  </RecommendWrapper>
);
