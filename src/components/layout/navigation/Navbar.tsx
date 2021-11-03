import styled from "styled-components";
import { useState } from "react";
import { mediaQueries } from "../../../utils/styleHelpers";
import Header from "../Header/Header";
import Logo from "../../Logo/Logo";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav/MobileNav";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "../Container/Container";
import { SecondaryButton } from "../../Button/Button";

const Nav = styled.nav`
  display: flex;
  padding: 0.25rem 0;
`;
const NavList = styled.ul`
  display: none;
  ${mediaQueries("sm")`
  display: flex;
`}
`;

const ToggleMenuBtn = styled.button`
  display: flex;
  background: var(--cool-gray-2);
  border-radius: 1000px;
  padding: 0.5rem;
  ${mediaQueries("sm")`
  display: none;
  `}
`;

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <Container>
      <Header>
        <Logo />
        <Nav>
          <NavList>
            <li>
              <NavLinks exact to="/">
                Home
              </NavLinks>
            </li>
            <li>
              <NavLinks to="/establishments">Establishments</NavLinks>
            </li>
            <li>
              <NavLinks to="/contact">Contact</NavLinks>
            </li>
          </NavList>

          <ToggleMenuBtn
            aria-roledescription="Navmenu toggle button"
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            {isToggled ? <HiX size={24} /> : <HiMenu size={24} />}
          </ToggleMenuBtn>
        </Nav>
        <SecondaryButton size="md">Log in</SecondaryButton>
      </Header>
      <MobileNav isToggled={isToggled} />
    </Container>
  );
};

export default Navbar;
