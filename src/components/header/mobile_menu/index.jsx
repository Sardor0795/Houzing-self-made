import React, { Component } from "react";
import {
  CloseButton,
  MenuItem,
  MenuLink,
  MenuList,
  MobileMenuWrapper,
} from "./style";

import FacebookIcon from "../../../assets/icons/facebook_black.svg";
import TwitterIcon from "../../../assets/icons/twitter_black.svg";
import InstagramIcon from "../../../assets/icons/instagram_black.svg";
import LinkedinIcon from "../../../assets/icons/linkedin_black.svg";
import {
  SocialsItem,
  SocialsLink,
  SocialsList,
} from "../../footer/footer__top/style";

export default class MobileMenu extends Component {
  render() {
    return (
      <MobileMenuWrapper menu={this.props.menu}>
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
        <SocialsList>
          <SocialsItem>
            <SocialsLink mobile>
              <img src={FacebookIcon} alt="img" />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink mobile>
              <img src={TwitterIcon} alt="img" />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink mobile>
              <img src={InstagramIcon} alt="img" />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem last>
            <SocialsLink mobile>
              <img src={LinkedinIcon} alt="img" />
            </SocialsLink>
          </SocialsItem>
        </SocialsList>
      </MobileMenuWrapper>
    );
  }
}
