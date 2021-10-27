import styled from "styled-components";

const LogoLink = styled.a`
  font-family: "abril fatface";
  font-size: 1.44rem;
  font-weight: 700;
  color: var(--cool-gray-9);
`;
const Logo = () => {
  return <LogoLink href="/">Holidaze</LogoLink>;
};

export default Logo;
