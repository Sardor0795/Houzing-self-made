import React from "react";
import {
  CategoryCardImg,
  CategoryCardMiniImg,
  CategoryCardWrapper,
} from "./style";

export const CategoryCard = ({ img, text, miniImg }) => {
  return (
    <CategoryCardWrapper img={img}>
      <CategoryCardImg />
      <CategoryCardMiniImg minImg={miniImg}>{text}</CategoryCardMiniImg>
    </CategoryCardWrapper>
  );
};
