import { ReactNode } from "react";
import Container from "../Container/Container";
import FlexContainer from "../utilities/Flex/FlexContainer";

type HeroContentProps = {
  children: ReactNode;
};

const HeroContent = ({ children }: HeroContentProps) => {
  return (
    <Container>
      <FlexContainer col justifyContent="center" alignContent="center">
        {children}
      </FlexContainer>
    </Container>
  );
};

export default HeroContent;
