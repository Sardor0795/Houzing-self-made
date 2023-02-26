import styled from "styled-components";

import CloseIcon from "../../../assets/icons/header_close_btn.svg";

export const MobileMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  transition: transform 0.3s ease;
  transform: translateX(${({ menu }) => (menu === "open" ? "0" : "5000px")});
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url("${CloseIcon}");
  background-position: center center;
  background-repeat: no-repeat;
`;

export const MenuList = styled.ul`
  margin-top: 20%;
`;

export const MenuItem = styled.li`
  text-align: center;
  :not(:last-child) {
    margin-bottom: 24px;
  }
  margin-bottom: 128px;
`;

export const MenuLink = styled.a`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  cursor: pointer;
`;
