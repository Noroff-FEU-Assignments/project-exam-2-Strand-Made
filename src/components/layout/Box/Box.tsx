import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";

interface IBox {
  children: ReactNode;
  padding?:
    | "0"
    | "0.5rem"
    | "0.75rem"
    | "1rem"
    | "1.5rem"
    | "2rem"
    | "3rem"
    | "4rem"
    | "5rem";
  borderRadius?: boolean;
  borderRadiusT?: boolean;
  borderRadiusB?: boolean;
  color?: string;
  background?: string;
}

const StyledBox = styled.div<IBox>`
  --padding: ${(props) => props.padding};
  border-radius: ${(props) =>
    props.borderRadius ? `${borderRadius.md}` : null};
  ${(props) => {
    return (
      props.borderRadiusT &&
      css`
        border-top-left-radius: ${borderRadius.md};
        border-top-right-radius: ${borderRadius.md};
      `
    );
  }}
  ${(props) => {
    return (
      props.borderRadiusB &&
      css`
        border-bottom-left-radius: ${borderRadius.md};
        border-bottom-right-radius: ${borderRadius.md};
      `
    );
  }}
  padding: var(--padding);
  color: ${(props) => (props.color ? props.color : "inherit")};
  background: ${(props) => (props.background ? props.background : "inherit")};
`;

const Box = ({
  children,
  padding,
  borderRadius,
  borderRadiusT,
  borderRadiusB,
  color,
  background,
}: IBox) => {
  return (
    <StyledBox
      padding={padding}
      borderRadius={borderRadius}
      borderRadiusT={borderRadiusT}
      borderRadiusB={borderRadiusB}
      color={color}
      background={background}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
