import styled from "styled-components";
import { mediaQueries } from "../../utils/styleHelpers";
import Header from "../layout/Header/Header";

interface ButtonProps {
  children: string;
}

const PrimaryButton = styled.button<ButtonProps>`
  background: var(--blue-5);
  color: var(--blue-1);
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  ${Header} & {
    display: none;
    ${mediaQueries("sm")`
      display: block;
      `}
  }
`;

const Button = ({ children }: ButtonProps) => {
  return <PrimaryButton>{children}</PrimaryButton>;
};

export default Button;
