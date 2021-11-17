import styled from "styled-components";
import { useAuth } from "../../../../context/AuthContext";
import NavLinks from "../NavLinks";
import { mediaQueries } from "../../../../utils/styleHelpers";
import FlexContainer from "../../utilities/Flex/FlexContainer";
import { shadows } from "../../../../globalStyle/_variables";
import LinkButton from "../../../Button/LinkButton";
import { SecondaryButton } from "../../../Button/Button";

interface MobileNavProps {
  isToggled: boolean;
  setIsToggled?: any;
}

const MobileMenuContainer = styled.div<MobileNavProps>`
  position: absolute;
  z-index: 10;
  box-shadow: ${shadows.lg};
  background: white;
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
  const { auth, setAuth } = useAuth();
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
                {auth && (
                  <MobileNavItem>
                    <NavLinks onClick={setIsToggled} mobile to="/admin">
                      Admin
                    </NavLinks>
                  </MobileNavItem>
                )}
              </FlexContainer>
            </MobileNavList>
            <FlexContainer justifyContent="end">
              {auth ? (
                <SecondaryButton
                  onClick={() => {
                    setAuth(null);
                    setIsToggled();
                  }}
                  size="md"
                >
                  Log Out
                </SecondaryButton>
              ) : (
                <LinkButton onClick={setIsToggled} to="/login" size="sm">
                  Login
                </LinkButton>
              )}
            </FlexContainer>
          </>
        ) : null}
      </MobileMenuContainer>
    </>
  );
};

export default MobileNav;
