import styled from "styled-components";
import { ReactNode } from "react";
import { mediaQueries } from "../../../utils/styleHelpers";
import HeroContent from "./HeroContent";
import hero from "../../../assets/hero.jpg";
import Heading from "../../Typography/Heading";

type HeroProps = {
  children: ReactNode;
};

export const HeroSection = styled.section`
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
  padding: 0.5rem;
  width: 100%;
  margin: auto;
  margin-bottom: 1rem;
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
        <Heading size="3xl">Experience Bergen with Holidaze</Heading>
        {children}
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
