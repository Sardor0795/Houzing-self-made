import styled from "styled-components";

export const MobileMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url("${({ CloseIcon }) => CloseIcon}");
`;
