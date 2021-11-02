import styled from "styled-components";
import { mediaQueries } from "../../utils/styleHelpers";
import { shadows } from "../../globalStyle/_variables";
import Header from "../layout/Header/Header";

interface ButtonProps {
  children: string;
  full?: boolean;
}

export const PrimaryButton = styled.button<ButtonProps>`
  background: var(--blue-5);
  color: var(--blue-1);
  font-weight: 600;
  letter-spacing: 0.8px;
  border-radius: 8px;
  width: ${(props) => props.full && "100%"};
  padding: 0.5rem 1.5rem;
  box-shadow: ${shadows.md};
  :active,
  :focus {
    background: var(--blue-6);
    box-shadow: ${shadows.sm};
  }
  ${Header} & {
    display: none;
    word-wrap: none;
    ${mediaQueries("sm")`
      display: block;
      `}
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: none;
  color: var(--blue-5);
  box-shadow: none;
`;
