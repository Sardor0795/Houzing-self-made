import styled from "styled-components";

export const RecommendWrapper = styled.div`
  min-height: 713px;
  background-color: #fff;
  padding: 96px 0 56px 0;
  @media (max-width: 960px) {
    padding: 70px 0 56px 0;
  }
`;

export const MainCardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: -20px;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
