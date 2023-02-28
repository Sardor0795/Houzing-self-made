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
  margin-left: 20px;
  @media (max-width: 1024px) {
    max-width: unset;
    width: 45%;
    margin-bottom: 115px;
  }
  @media (max-width: 760px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
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

export const TestCardUserImg = styled.span`
  width: 42px;
  height: 42px;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  background-image: url("${({ userImg }) => userImg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 16px;
`;

export const TestCardUserInfo = styled.span`
  font-weight: ${({ name }) => (name ? "600" : "400")};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${({ name }) => (name ? "#0d263b" : "#696969")};
`;
