import styled from "styled-components";

export const FooterTopWrapper = styled.div`
  background-color: #0d263b;
  padding-top: 48px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

export const Contact = styled.div`
  max-width: 253px;
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
    background-color: #253b4e;
    opacity: 1;
  }
`;

export const ExtraLinksWrapper = styled.div``;

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
