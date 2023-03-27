import styled from "styled-components";

export const SlideWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const SlideInner = styled.div`
  display: flex;
  width: 300%;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  position: relative;
  background-image: url("${({ bgImg }) => bgImg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 134px 0;
  min-height: 571px;
  text-align: center;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000a6;
  }
  @media (max-width: 600px) {
    padding-top: 160px;
    padding-bottom: 20px;
  }
  @media (max-width: 400px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 8px;
  z-index: 5;
  position: relative;
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
  z-index: 5;
  position: relative;
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
  z-index: 5;
  position: relative;
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
  z-index: 5;
  position: relative;
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
  z-index: 5;
  position: relative;
  @media (max-width: 600px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Right = styled.button`
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #ffffff55;
  left: ${({ left }) => (left ? "30px" : "unset")};
  right: ${({ right }) => (right ? "30px" : "unset")};
  top: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    left: ${({ left }) => (left ? "50px" : "unset")};
    right: ${({ right }) => (right ? "50px" : "unset")};
    top: 55%;
  }
`;

export const OptionWrapper = styled.div`
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
