import { Container } from "../../../global.style";
import {
  Contact,
  FooterTitle,
  ExtraLinksWrapper,
  LocationIconStyled,
  Locations,
  SocialsItem,
  SocialsLink,
  SocialsList,
  Ul,
  ExtraLinksList,
  ExtraLinksItem,
  ExtraLinksLink,
} from "./style";
import { FooterTopWrapper } from "./style";

import LocationIcon from "../../../assets/icons/footer_location.svg";
import PhoneIcon from "../../../assets/icons/footer_phone.svg";
import EmailIcon from "../../../assets/icons/footer_email.svg";

import FacebookIcon from "../../../assets/icons/facebook.svg";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import LinkedinIcon from "../../../assets/icons/linkedin.svg";

export const FooterTop = () => (
  <Container>
    <FooterTopWrapper>
      <Contact order_0>
        <FooterTitle>Contact Us</FooterTitle>
        <Ul>
          <li>
            <Locations textLg href="!#">
              <LocationIconStyled src={LocationIcon} alt="img" />
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </Locations>
          </li>
          <li>
            <Locations href="!#">
              <LocationIconStyled src={PhoneIcon} alt="img" />
              123 456 7890
            </Locations>
          </li>
          <li>
            <Locations href="!#">
              <LocationIconStyled src={EmailIcon} alt="img" />
              support@houzing.com
            </Locations>
          </li>
        </Ul>
        <SocialsList>
          <SocialsItem>
            <SocialsLink>
              <img src={FacebookIcon} alt="img" />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink>
              <img src={TwitterIcon} alt="img" />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem>
            <SocialsLink>
              <img src={InstagramIcon} alt="img" />
            </SocialsLink>
          </SocialsItem>
          <SocialsItem last>
            <SocialsLink>
              <img src={LinkedinIcon} alt="img" />
            </SocialsLink>
          </SocialsItem>
        </SocialsList>
      </Contact>
      <ExtraLinksWrapper>
        <FooterTitle>Discover</FooterTitle>
        <ExtraLinksList>
          <ExtraLinksItem>
            <ExtraLinksLink>Chicago</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem>
            <ExtraLinksLink>Los Angeles</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem>
            <ExtraLinksLink>Miami</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem last>
            <ExtraLinksLink>New York</ExtraLinksLink>
          </ExtraLinksItem>
        </ExtraLinksList>
      </ExtraLinksWrapper>
      <ExtraLinksWrapper order_1>
        <FooterTitle>Lists by Category</FooterTitle>
        <ExtraLinksList>
          <ExtraLinksItem>
            <ExtraLinksLink>Apartments</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem>
            <ExtraLinksLink>Condos</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem>
            <ExtraLinksLink>Houses</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem>
            <ExtraLinksLink>Offices</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem>
            <ExtraLinksLink>Retail</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem last>
            <ExtraLinksLink>Villas</ExtraLinksLink>
          </ExtraLinksItem>
        </ExtraLinksList>
      </ExtraLinksWrapper>
      <ExtraLinksWrapper>
        <FooterTitle>Lists by Category</FooterTitle>
        <ExtraLinksList>
          <ExtraLinksItem>
            <ExtraLinksLink>About Us</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem>
            <ExtraLinksLink>Terms & Conditions</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem>
            <ExtraLinksLink>Support Center</ExtraLinksLink>
          </ExtraLinksItem>
          <ExtraLinksItem last>
            <ExtraLinksLink>Contact Us</ExtraLinksLink>
          </ExtraLinksItem>
        </ExtraLinksList>
      </ExtraLinksWrapper>
    </FooterTopWrapper>
  </Container>
);
