import styled from "styled-components";
import heroBg from "../../assets/img/hero.jpg";

export const HeroWrapper = styled.div`
  background-image: url("${heroBg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 134px 0;
  min-height: 571px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
  }
`;

export const HeroText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  @media (max-width: 330px) {
    font-size: 13px;
  }
`;

export const HeroMiniCard = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 24px;
  margin-right: ${({ last }) => (last ? "0px" : "24px")};
  background-image: url("${({ bgIcon }) => bgIcon}");
  background-repeat: no-repeat;
  background-position: center top;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
  @media (max-width: 376px) {
    font-size: 11px;
  }
`;

export const HeroPrice = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 48px;
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 24px;
  }
`;

export const HeroButton = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  padding: 12px 50px;
  border: 1px solid #ffffff;
  border-radius: 2px;
  @media (max-width: 600px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;
