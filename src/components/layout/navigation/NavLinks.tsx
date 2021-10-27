import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  color: var(--cool-gray-4);
`;
interface NavLinkProps {
  children: React.ReactChild;
  href: string;
}

const NavLinks = ({ children, href }: NavLinkProps) => {
  return <Link to={href}>{children}</Link>;
};

export default NavLinks;
