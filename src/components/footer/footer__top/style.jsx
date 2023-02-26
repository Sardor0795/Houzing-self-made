import styled from "styled-components";

export const FooterTopWrapper = styled.div`
  background-color: #0d263b;
  padding-top: 48px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 760px) {
    flex-wrap: wrap;
    text-align: center;
    padding-bottom: 0;
  }
`;

export const Contact = styled.div`
  max-width: 253px;
  @media (max-width: 760px) {
    width: 50%;
    max-width: 50%;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const LocationIconStyled = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 20px;
`;

export const Ul = styled.ul`
  margin-bottom: 32px;
`;

export const Locations = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  height: 50px;
  color: #ffffff;
  display: flex;
  align-items: center;
  width: fit-content;
  @media (max-width: 760px) {
    width: ${({ textLg }) => (textLg ? "256px" : "100%")};
    margin-left: ${({ textLg }) => (textLg ? "auto" : "unset")};
    margin-right: ${({ textLg }) => (textLg ? "auto" : "unset")};
    text-align: center;
    justify-content: center;
  }
`;

export const FooterTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

export const SocialsList = styled.ul`
  display: flex;
  margin-left: -11px;
  @media (max-width: 760px) {
    margin-left: unset;
    justify-content: center;
  }
  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
`;

export const SocialsItem = styled.li`
  margin-right: ${({ last }) => (last ? "0" : "15px")};
`;

export const SocialsLink = styled.a`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  :hover {
    background-color: ${({ mobile }) => (mobile ? "#E7EAECFF" : "#253b4e")};
    opacity: 1;
  }
`;

export const ExtraLinksWrapper = styled.div`
  @media (max-width: 760px) {
    width: 50%;
    max-width: 50%;
    order: ${({ order_1 }) => (order_1 ? "-1" : "unset")};
    margin-bottom: 40px;
  }
  @media (max-width: 600px) {
    order: ${({ order_1 }) => (order_1 ? "unset" : "unset")};
    width: 100%;
    max-width: 100%;
  }
`;

export const ExtraLinksList = styled.ul``;
export const ExtraLinksItem = styled.li`
  margin-bottom: ${({ last }) => (last ? "0" : "20px")};
`;
export const ExtraLinksLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
`;
