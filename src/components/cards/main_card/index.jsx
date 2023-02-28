import React from "react";
import {
  Badge,
  MainCardBottom,
  MainCardBtuttons,
  MainCardCenter,
  MainCardMiniCards,
  MainCardPriceCurrent,
  MainCardPriceDell,
  MainCardPrices,
  MainCardText,
  MainCardTitle,
  MainCardTop,
  MainCardUserImg,
  MainCardWrapper,
} from "./style";

import miniCardIcon_1 from "../../../assets/icons/main_card_bed.svg";
import miniCardIcon_2 from "../../../assets/icons/main_card_bath.svg";
import miniCardIcon_3 from "../../../assets/icons/main_card_car.svg";
import miniCardIcon_4 from "../../../assets/icons/main_card_ruler.svg";

import arrowIcon from "../../../assets/icons/main_card_arrow.svg";
import heartIcon from "../../../assets/icons/main_card_heart.svg";

export const MainCard = ({ bgImg, userImg }) => {
  return (
    <MainCardWrapper>
      <MainCardTop bgImg={bgImg}>
        <Badge type="feature">FEATURED</Badge>
        <Badge type="sale">FOR SALE</Badge>
        <MainCardUserImg userImg={userImg} />
      </MainCardTop>
      <MainCardCenter>
        <MainCardTitle>New Apartment Nice Wiew</MainCardTitle>
        <MainCardText>Quincy St, Brooklyn, NY, USA</MainCardText>
        <MainCardMiniCards bgIcon={miniCardIcon_1}>4 Beds</MainCardMiniCards>
        <MainCardMiniCards bgIcon={miniCardIcon_2}>5 Baths</MainCardMiniCards>
        <MainCardMiniCards bgIcon={miniCardIcon_3}>1 Garage</MainCardMiniCards>
        <MainCardMiniCards bgIcon={miniCardIcon_4} last>
          1200 Sq Ft
        </MainCardMiniCards>
      </MainCardCenter>
      <MainCardBottom>
        <MainCardPrices>
          <MainCardPriceDell>$2,800/mo</MainCardPriceDell>
          <MainCardPriceCurrent>$7,500/mo</MainCardPriceCurrent>
        </MainCardPrices>
        <MainCardBtuttons bgIcon={arrowIcon} />
        <MainCardBtuttons bgIcon={heartIcon} />
      </MainCardBottom>
    </MainCardWrapper>
  );
};
