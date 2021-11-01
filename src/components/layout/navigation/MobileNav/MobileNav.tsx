import styled from "styled-components";
import NavLinks from "../NavLinks";
import { mediaQueries } from "../../../../utils/styleHelpers";
import FlexContainer from "../../utilities/Flex/FlexContainer";
import Button from "../../../Button/Button";

interface MobileNavProps {
  isToggled: boolean;
}

const MobileMenuContainer = styled.div<MobileNavProps>`
  position: absolute;

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

const MobileNav = ({ isToggled }: MobileNavProps) => {
  return (
    <>
      <MobileMenuContainer isToggled={isToggled}>
        {isToggled ? (
          <>
            <MobileNavList role="menu" aria-roledescription="mobile nav menu">
              <FlexContainer col gap="1rem">
                <MobileNavItem>
                  <NavLinks mobile exact to="/">
                    Home
                  </NavLinks>
                </MobileNavItem>
                <MobileNavItem>
                  <NavLinks mobile to="/establishments">
                    Establishments
                  </NavLinks>
                </MobileNavItem>
                <MobileNavItem>
                  <NavLinks mobile to="/contact">
                    Contact
                  </NavLinks>
                </MobileNavItem>
              </FlexContainer>
            </MobileNavList>
            <FlexContainer justifyContent="end">
              <Button>Login</Button>
            </FlexContainer>
          </>
        ) : null}
      </MobileMenuContainer>
    </>
  );
};

export default MobileNav;
