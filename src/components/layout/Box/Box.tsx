import { ReactNode } from "react";
import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";

interface IBox {
  children: ReactNode;
  padding?:
    | "0.5rem"
    | "0.75rem"
    | "1rem"
    | "1.5rem"
    | "2rem"
    | "3rem"
    | "4rem"
    | "5rem";
  borderRadius?: boolean;
  color?: string;
  background?: string;
}

const StyledBox = styled.div<IBox>`
  --padding: ${(props) => props.padding};
  border-radius: ${(props) =>
    props.borderRadius ? `${borderRadius.md}` : null};
  padding: var(--padding);
  color: ${(props) => (props.color ? props.color : "inherit")};
  background: ${(props) => (props.background ? props.background : "inherit")};
`;

const Box = ({ children, padding, borderRadius, color, background }: IBox) => {
  return (
    <StyledBox
      padding={padding}
      borderRadius={borderRadius}
      color={color}
      background={background}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
