import { Container, SectionText, SectionTitle } from "../../global.style";
import { CategoryCard } from "../cards/category_card";
import { MainCardsWrapper } from "../recomend/style";
import { CategoryWrapper } from "./style";

import catImg_1 from "../../assets/img/category_1.jpg";
import catImg_2 from "../../assets/img/category_2.jpg";
import catImg_3 from "../../assets/img/category_3.jpg";
import catImg_4 from "../../assets/img/category_4.jpg";

export const Category = () => {
  return (
    <CategoryWrapper>
      <Container>
        <SectionTitle>Category</SectionTitle>
        <SectionText>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </SectionText>
        <MainCardsWrapper>
          <CategoryCard img={catImg_1} />
          <CategoryCard img={catImg_2} />
          <CategoryCard img={catImg_3} />
          <CategoryCard img={catImg_4} />
        </MainCardsWrapper>
      </Container>
    </CategoryWrapper>
  );
};
