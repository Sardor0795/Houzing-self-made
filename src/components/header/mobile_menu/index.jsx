import React, { Component } from "react";
import { CloseButton, MenuItem, MenuLink, MenuList, MobileMenuWrapper } from "./style";

export default class MobileMenu extends Component {
  render() {
    return (
      <MobileMenuWrapper>
        <CloseButton></CloseButton>
        <MenuList>
            <MenuItem>
                <MenuLink>Home</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink>Properties</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink>Contacts</MenuLink>
            </MenuItem>
        </MenuList>
      </MobileMenuWrapper>
    );
  }
}
