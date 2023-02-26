import styled, { css } from "styled-components";

export const ChooseWrapper = styled.div`
  background-color: #f5f7fc;
  padding: 50px 0;
`;

const common = css`
  font-style: normal;
  text-align: center;
`;

export const ChooseTitle = styled.h2`
  ${common}
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-bottom: 8px;
`;

export const ChooseText = styled.p`
  ${common}
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  margin-bottom: 40px;
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
  @media (max-width: 800px) {
    width: 50%;
    max-width: 50%;
    margin-bottom: ${({ mBottom }) => (mBottom ? "40px" : 0)};
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
  color: #696969;
  width: 235px;
  @media (max-width: 800px) {
    width: unset;
  }
`;
