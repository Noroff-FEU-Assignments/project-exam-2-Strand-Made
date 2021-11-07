import styled from "styled-components";
import NavLinks from "../NavLinks";
import { mediaQueries } from "../../../../utils/styleHelpers";
import FlexContainer from "../../utilities/Flex/FlexContainer";
import { PrimaryButton } from "../../../Button/Button";
import { shadows } from "../../../../globalStyle/_variables";

interface MobileNavProps {
  isToggled: boolean;
  setIsToggled?: any;
}

const MobileMenuContainer = styled.div<MobileNavProps>`
  position: absolute;
  z-index: 10;
  box-shadow: ${shadows.lg};
  background: var(--cool-gray-1);
  padding: 1.25rem;
  left: 0;
  width: 100%;
  transform: ${(props) =>
    props.isToggled ? "translateY(0)" : "translateY(-200px)"};

  ${mediaQueries("sm")`
  display: none;
  `}
`;
const MobileNavList = styled.ul`
  margin-bottom: 1.5rem;
`;

const MobileNavItem = styled.li`
  width: 100%;
`;

const MobileNav = ({ isToggled, setIsToggled }: MobileNavProps) => {
  return (
    <>
      <MobileMenuContainer isToggled={isToggled}>
        {isToggled ? (
          <>
            <MobileNavList role="menu" aria-roledescription="mobile nav menu">
              <FlexContainer col gap="1rem">
                <MobileNavItem>
                  <NavLinks onClick={setIsToggled} mobile to="/">
                    Home
                  </NavLinks>
                </MobileNavItem>
                <MobileNavItem>
                  <NavLinks onClick={setIsToggled} mobile to="/establishments">
                    Establishments
                  </NavLinks>
                </MobileNavItem>
                <MobileNavItem>
                  <NavLinks onClick={setIsToggled} mobile to="/contact">
                    Contact
                  </NavLinks>
                </MobileNavItem>
              </FlexContainer>
            </MobileNavList>
            <FlexContainer justifyContent="end">
              <PrimaryButton size="md">Login</PrimaryButton>
            </FlexContainer>
          </>
        ) : null}
      </MobileMenuContainer>
    </>
  );
};

export default MobileNav;
