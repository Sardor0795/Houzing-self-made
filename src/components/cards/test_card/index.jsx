import React from "react";
import { TestCardInner, TestCardWrapper } from "./style";

import userImg from "../../../assets/img/main_card_user_img_3.jpg";
import { TestCardUserImg, TestCardUserInfo } from "../../testiomential/style";

export const TestCard = () => {
  return (
    <TestCardWrapper>
      “ I believe in lifelong learning and Skola is a great place to learn from
      experts. I've learned a lot and recommend it to all my friends “
      <TestCardInner>
        <TestCardUserImg userImg={userImg} />
        <TestCardUserInfo name>Marvin McKinney</TestCardUserInfo>
        <TestCardUserInfo>Designer</TestCardUserInfo>
      </TestCardInner>
    </TestCardWrapper>
  );
};
