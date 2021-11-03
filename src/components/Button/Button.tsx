import styled from "styled-components";
import { mediaQueries } from "../../utils/styleHelpers";
import { shadows } from "../../globalStyle/_variables";
import Header from "../layout/Header/Header";

interface ButtonProps {
  children: string;
  full?: boolean;
  size?: keyof typeof buttonSizes;
  href?: string;
}
const buttonSizes = {
  sm: "8px 10px",
  md: "12px 16px",
  l: "15px 12px",
};
export const PrimaryButton = styled.button<ButtonProps>`
  display: inline-block;
  background: var(--blue-5);
  font-size: ${(props) => {
    if (props.size === "sm") return "0.833rem";
    if (props.size === "md") return "1rem";
    if (props.size === "l") return "1.4rem";
    return "1rem";
  }};
  color: var(--blue-1);
  font-weight: 600;
  border-radius: 8px;
  width: ${(props) => props.full && "100%"};
  padding: ${(props) => {
    if (props.size === "sm") return buttonSizes.sm;
    if (props.size === "md") return buttonSizes.md;
    if (props.size === "l") return buttonSizes.l;
  }};
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
  :active,
  :focus {
    background: none;
    color: var(--blue-6);
    box-shadow: none;
  }
`;
