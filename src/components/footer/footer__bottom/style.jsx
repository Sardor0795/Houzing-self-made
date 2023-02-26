import styled from "styled-components";

export const FooterBottomWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 24px 0;
  }
`;

export const Copyright = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  @media (max-width: 600px) {
    max-width: 234px;
    text-align: center;
  }
`;
