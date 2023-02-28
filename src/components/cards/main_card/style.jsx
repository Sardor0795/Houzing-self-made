import styled, { css } from "styled-components";

export const MainCardWrapper = styled.div`
  width: 100%;
  max-width: 380px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  overflow: hidden;
`;

const common = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const MainCardTop = styled.div`
  ${common}
  height: 220px;
  padding: 20px;
  background-image: url("${({ bgImg }) => bgImg}");
  position: relative;
`;

export const Badge = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  color: #ffffff;
  text-transform: uppercase;
  padding: 5px 12px;
  position: absolute;
  right: ${({ type }) => (type === "sale" ? "20px" : "unset")};
  left: ${({ type }) => (type === "feature" ? "20px" : "unset")};
  border-radius: 3px;
  background-color: ${({ type }) =>
    type === "feature" ? "#0061DF" : "#0D263B"};
`;

export const MainCardUserImg = styled.span`
  width: 42px;
  height: 42px;
  border: 2px solid #fff;
  border-radius: 50%;
  background-image: url("${({ userImg }) => userImg}");
  ${common}
  position: absolute;
  bottom: -20px;
  right: 20px;
`;

export const MainCardCenter = styled.div`
  padding: 24px 20px 16px 20px;
  border-bottom: 1px solid #e6e9ec;
`;

export const MainCardTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 4px;
`;

export const MainCardText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: 16px;
`;

export const MainCardMiniCards = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  padding-top: 24px;
  margin-right: ${({ last }) => (last ? "0px" : "35px")};
  background-image: url("${({ bgIcon }) => bgIcon}");
  background-repeat: no-repeat;
  background-position: center top;
`;

export const MainCardBottom = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

export const MainCardPrices = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const MainCardPriceDell = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`;
export const MainCardPriceCurrent = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

export const MainCardBtuttons = styled.button`
  width: 35px;
  height: 35px;
  background-image: url("${({ bgIcon }) => bgIcon}");
  ${common}
  background-size: unset;
  border-radius: 50%;
  :hover {
    background-color: #f6f8f9;
    opacity: 1;
  }
`;
