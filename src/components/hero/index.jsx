import {
  HeroButton,
  HeroMiniCard,
  HeroPrice,
  HeroText,
  HeroTitle,
  HeroWrapper,
  Right,
  SlideInner,
  SlideWrapper,
} from "./style";

import BedIcon from "../../assets/icons/hero_bed.svg";
import BathIcon from "../../assets/icons/hero_bath.svg";
import CarIcon from "../../assets/icons/hero_car.svg";
import RulerIcon from "../../assets/icons/hero_ruler.svg";
import { Container } from "../../global.style";

import HeroBg_1 from "../../assets/img/hero.jpg";
import HeroBg_2 from "../../assets/img/hero_img_2.jpg";
import HeroBg_3 from "../../assets/img/hero_img_3.jpg";
import { useState } from "react";

import rightArrow from "../../assets/icons/right_arrow.svg";
import lefttArrow from "../../assets/icons/left_arrow.svg";

export const Hero = () => {
  let [offset, setOffset] = useState(0);
  let [index, setIndex] = useState(1);
  let nextBtn = () => {
    let slideWrapper = document.querySelector(".slideWrapper");
    let width = window.getComputedStyle(slideWrapper).width;
    let inner = document.querySelector(".inner");
    inner.style.transition = "0.3s ease all";
    if (index === 3) {
      index = 1;
      offset = 0;
    } else {
      setOffset((offset += +width.slice(0, width.length - 2)));
      setIndex(index + 1);
    }
    inner.style.transform = `translateX(-${offset}px)`;
  };
  let prevBtn = () => {
    let slideWrapper = document.querySelector(".slideWrapper");
    let width = window.getComputedStyle(slideWrapper).width;
    let inner = document.querySelector(".inner");
    inner.style.transition = "0.3s ease all";
    if (offset === 0) {
      index = 3;
      offset = +width.slice(0, width.length - 2) * 2;
    } else {
      setOffset((offset -= +width.slice(0, width.length - 2)));
    }
    inner.style.transform = `translateX(-${offset}px)`;
  };
  return (
    <SlideWrapper className="slideWrapper">
      <SlideInner className="inner">
        <HeroWrapper className="slide" bgImg={HeroBg_1}>
          <Container>
            <HeroTitle>Skyper Pool Partment</HeroTitle>
            <HeroText>112 Glenwood Ave Hyde Park, Boston, MA</HeroText>
            <HeroMiniCard bgIcon={BedIcon}>4 beds</HeroMiniCard>
            <HeroMiniCard bgIcon={BathIcon}>5 Baths</HeroMiniCard>
            <HeroMiniCard bgIcon={CarIcon}>1 Garage</HeroMiniCard>
            <HeroMiniCard bgIcon={RulerIcon} last>
              1200 Sq Ft
            </HeroMiniCard>
            <HeroPrice>$5,250/mo</HeroPrice>
            <HeroButton>Read more</HeroButton>
          </Container>
        </HeroWrapper>
        <HeroWrapper className="slide" bgImg={HeroBg_2}>
          <Container>
            <HeroTitle>Skyper Pool Partment</HeroTitle>
            <HeroText>112 Glenwood Ave Hyde Park, Boston, MA</HeroText>
            <HeroMiniCard bgIcon={BedIcon}>4 beds</HeroMiniCard>
            <HeroMiniCard bgIcon={BathIcon}>5 Baths</HeroMiniCard>
            <HeroMiniCard bgIcon={CarIcon}>1 Garage</HeroMiniCard>
            <HeroMiniCard bgIcon={RulerIcon} last>
              1200 Sq Ft
            </HeroMiniCard>
            <HeroPrice>$5,250/mo</HeroPrice>
            <HeroButton>Read more</HeroButton>
          </Container>
        </HeroWrapper>
        <HeroWrapper className="slide" bgImg={HeroBg_3}>
          <Container>
            <HeroTitle>Skyper Pool Partment</HeroTitle>
            <HeroText>112 Glenwood Ave Hyde Park, Boston, MA</HeroText>
            <HeroMiniCard bgIcon={BedIcon}>4 beds</HeroMiniCard>
            <HeroMiniCard bgIcon={BathIcon}>5 Baths</HeroMiniCard>
            <HeroMiniCard bgIcon={CarIcon}>1 Garage</HeroMiniCard>
            <HeroMiniCard bgIcon={RulerIcon} last>
              1200 Sq Ft
            </HeroMiniCard>
            <HeroPrice>$5,250/mo</HeroPrice>
            <HeroButton>Read more</HeroButton>
          </Container>
        </HeroWrapper>
      </SlideInner>
      <Right onClick={prevBtn} left>
        <img src={lefttArrow} alt="img" />
      </Right>
      <Right onClick={nextBtn} right>
        <img src={rightArrow} alt="img" />
      </Right>
    </SlideWrapper>
  );
};
