import { MainCardsWrapper, RecommendWrapper } from "./style";
import { Container, SectionText, SectionTitle } from "../../global.style";
import { MainCard } from "../cards/main_card";

import bgImg_1 from "../../assets/img/main_card_img_1.jpg";
import userImg_1 from "../../assets/img/main_card_user_img_1.jpg";
import bgImg_2 from "../../assets/img/main_card_img_2.jpg";
import userImg_2 from "../../assets/img/main_card_user_img_2.jpg";
import bgImg_3 from "../../assets/img/main_card_img_3.jpg";
import userImg_3 from "../../assets/img/main_card_user_img_3.jpg";

export const Recommend = () => (
  <RecommendWrapper>
    <Container>
      <SectionTitle>Recommended</SectionTitle>
      <SectionText>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </SectionText>
      <MainCardsWrapper>
        <MainCard bgImg={bgImg_1} userImg={userImg_1} />
        <MainCard bgImg={bgImg_2} userImg={userImg_2} />
        <MainCard bgImg={bgImg_3} userImg={userImg_3} />
      </MainCardsWrapper>
    </Container>
  </RecommendWrapper>
);
