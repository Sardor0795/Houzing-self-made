import styled from "styled-components";

export const TestCardWrapper = styled.div`
  padding: 40px;
  padding-bottom: 60px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  position: relative;
  max-width: 380px;
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  position: relative;
`;

export const TestCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -85px;
  left: 50%;
  transform: translateX(-50%);
`;
