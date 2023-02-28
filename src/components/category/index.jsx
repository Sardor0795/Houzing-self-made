import { Container, SectionText, SectionTitle } from "../../global.style";
import { CategoryCard } from "../cards/category_card";
import { MainCardsWrapper } from "../recomend/style";
import { CategoryWrapper } from "./style";

import catImg_1 from "../../assets/img/category_1.jpg";
import catImg_2 from "../../assets/img/category_2.jpg";
import catImg_3 from "../../assets/img/category_3.jpg";
import catImg_4 from "../../assets/img/category_4.jpg";

import catMinImg_1 from "../../assets/icons/category_home.svg";
import catMinImg_2 from "../../assets/icons/category_apartment.svg";
import catMinImg_3 from "../../assets/icons/category_office.svg";
import catMinImg_4 from "../../assets/icons/category_villa.svg";

export const Category = () => {
  return (
    <CategoryWrapper>
      <Container>
        <SectionTitle>Category</SectionTitle>
        <SectionText>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </SectionText>
        <MainCardsWrapper>
          <CategoryCard miniImg={catMinImg_1} text="House" img={catImg_1} />
          <CategoryCard miniImg={catMinImg_2} text="Apartment" img={catImg_2} />
          <CategoryCard miniImg={catMinImg_3} text="Office" img={catImg_3} />
          <CategoryCard miniImg={catMinImg_4} text="Villa" img={catImg_4} />
        </MainCardsWrapper>
      </Container>
    </CategoryWrapper>
  );
};
