import React from "react";
import {
  CategoryCardImg,
  CategoryCardMiniImg,
  CategoryCardWrapper,
} from "./style";

export const CategoryCard = ({ img, text, miniImg }) => {
  return (
    <CategoryCardWrapper>
      <CategoryCardImg src={img} />
      <CategoryCardMiniImg minImg={miniImg}>{text}</CategoryCardMiniImg>
    </CategoryCardWrapper>
  );
};
