import styled, { css } from "styled-components";

export const ChooseWrapper = styled.div`
  background-color: #f5f7fc;
  padding: 50px 0;
`;

const common = css`
  font-style: normal;
  text-align: center;
`;

export const ChooseCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ChooseCard = styled.div`
  max-width: ${({ large }) => (large ? "243px" : "235px")};
  background-image: url("${({ cardIcon }) => cardIcon}");
  padding-top: 74px;
  background-repeat: no-repeat;
  background-position: center top;
  text-align: center;
  @media (max-width: 1024px) {
    width: 50%;
    max-width: 50%;
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: ${({ mBottom }) => (mBottom ? "40px" : 0)};
  }
  @media (max-width: 610px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: ${({ mBottomSmall }) => (mBottomSmall ? "40px" : 0)};
  }
`;

export const ChooseCardTitle = styled.h3`
  ${common}
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 8px;
`;

export const ChooseCardText = styled.p`
  ${common}
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  width: 235px;
  @media (max-width: 1024px) {
    width: unset;
  }
`;
