import styled from "styled-components";
import { mediaQueries } from "../../utils/styleHelpers";

const LogoLink = styled.a`
  font-family: "Abril Fatface", crusive;
  font-size: 1.5rem;
  color: var(--cool-gray-9);
  ${mediaQueries("md")`
    font-size: 2rem;
  `}
`;
const Logo = () => {
  return <LogoLink href="/">Holidaze</LogoLink>;
};

export default Logo;
