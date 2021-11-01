import styled from "styled-components";
import { mediaQueries } from "../../utils/styleHelpers";

const LogoLink = styled.a`
  font-family: "abril fatface", serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--cool-gray-9);
  ${mediaQueries("md")`
    font-size: 2rem;
  `}
`;
const Logo = () => {
  return <LogoLink href="/">Holidaze</LogoLink>;
};

export default Logo;
