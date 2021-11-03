import React from "react";
import { mediaQueries } from "../../../utils/styleHelpers";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)<NavLinkProps>`
  display: block;
  position: relative;
  padding: 1rem;
  border-radius: 8px;
  color: var(--cool-gray-5);

  &:hover {
    background: var(--cool-gray-2);
    color: var(--cool-gray-8);
  }

  &.active {
    font-weight: 600;
    background: var(--cool-gray-2);
    color: var(--cool-gray-8);
    ${mediaQueries("sm")`
    ::after {
      position: absolute;
      height: 1px;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 40px;
      margin: 0 auto;
      content: "";
      border-bottom: 3px solid var(--cool-gray-8);
    }
    `}
  }

  ${mediaQueries("sm")`
    &.active{
      background: none;
      "var(--cool-gray-3)"
    }
    :hover {
      background: none;
    }
  `}
`;
interface NavLinkProps {
  children: React.ReactNode;
  mobile?: boolean;
  to: string | object | Function;
  exact?: boolean;
}

const NavLinks = ({ children, exact, to }: NavLinkProps) => {
  return (
    <Link exact={exact} activeClassName="active" to={to}>
      {children}
    </Link>
  );
};

export default NavLinks;
