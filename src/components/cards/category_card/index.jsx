import React from "react";
import { CategoryCardImg, CategoryCardWrapper } from "./style";

export const CategoryCard = ({ img }) => {
  return (
    <CategoryCardWrapper>
      <CategoryCardImg src={img} />
    </CategoryCardWrapper>
  );
};

// <CategoryCardImg src={catImg_2} />
// <CategoryCardImg src={catImg_3} />
// <CategoryCardImg src={catImg_4} />
