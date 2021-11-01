import styled from "styled-components";
import { ReactNode } from "react";
import { mediaQueries } from "../../../utils/styleHelpers";
import HeroContent from "./HeroContent";
import HeroHeading from "./HeroHeading";

type HeroProps = {
  children: ReactNode;
};

const HeroSection = styled.section`
  background-image: url("/assets/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
  width: 100%;
  margin: auto;
  margin-bottom: 4rem;
  ${mediaQueries("sm")`
  border-radius: 8px;
  max-width: 800px;
  `}
  ${mediaQueries("md")`
  max-width: 1100px;
  `}
  ${mediaQueries("lg")`
  max-width: 1200px;
  `}
`;

const Hero = ({ children }: HeroProps) => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroHeading size="3xl">
          Book your stay in Bergen with Holidaze
        </HeroHeading>
        {children}
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
