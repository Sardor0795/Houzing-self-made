import { HeroButton, HeroMiniCard, HeroPrice, HeroText, HeroTitle, HeroWrapper } from "./style";

import BedIcon from '../../assets/icons/hero_bed.svg'
import BathIcon from '../../assets/icons/hero_bath.svg'
import CarIcon from '../../assets/icons/hero_car.svg'
import RulerIcon from '../../assets/icons/hero_ruler.svg'

export const Hero = () => (
  <HeroWrapper>
    <HeroTitle>Skyper Pool Partment</HeroTitle>
    <HeroText>112 Glenwood Ave Hyde Park, Boston, MA</HeroText>
    <HeroMiniCard bgIcon={BedIcon}>4 beds</HeroMiniCard>
    <HeroMiniCard bgIcon={BathIcon}>5 Baths</HeroMiniCard>
    <HeroMiniCard bgIcon={CarIcon}>1 Garage</HeroMiniCard>
    <HeroMiniCard bgIcon={RulerIcon} last>1200 Sq Ft</HeroMiniCard>
    <HeroPrice>$5,250/mo</HeroPrice>
    <HeroButton>Read more</HeroButton>
  </HeroWrapper>
);
