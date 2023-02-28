import styled from "styled-components";

export const TestiomentalWrapper = styled.div`
  min-height: 482px;
  background-color: #f5f7fc;
  color: #000;
  padding-top: 48px;
  padding-bottom: 137px;
  position: relative;
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
