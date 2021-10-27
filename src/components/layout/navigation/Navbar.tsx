import styled from "styled-components";
import { useState } from "react";

import { mediaQueries } from "../../../utils/mediaQueries";
import Logo from "../../Logo/Logo";
import NavLinks from "./NavLinks";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "../Container/Container";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.nav``;
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
              <NavLinks href="/">Home</NavLinks>
            </li>
            <li>
              <NavLinks href="/establishments">Establishments</NavLinks>
            </li>
            <li>
              <NavLinks href="/contact">Contact</NavLinks>
            </li>
          </NavList>
          <ToggleMenuBtn
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            {isToggled ? <HiX size={24} /> : <HiMenu size={24} />}
          </ToggleMenuBtn>
        </Nav>
      </Header>
    </Container>
  );
};

export default Navbar;
