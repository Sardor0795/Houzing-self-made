import styled from "styled-components";

import PopularBgImg from "../../assets/img/popular.jpg";

export const PopularWrapper = styled.div`
  background-image: url("${PopularBgImg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 570px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.65;
    background-color: #000;
  }
`;

export const PopularTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  padding: 0 20px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #fff;
  max-width: 587px;
  margin-bottom: 48px;
  z-index: 5;
  @media (max-width: 700px) {
    font-size: 24px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const PopularButton = styled.button`
  background-color: #0061df;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  min-width: 180px;
  padding: 12px 5px;
  z-index: 5;
`;
