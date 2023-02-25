import styled from "styled-components";
import heroBg from "../../assets/img/hero.jpg";

export const HeroWrapper = styled.div`
  background-image: url("${heroBg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 571px;
`;
