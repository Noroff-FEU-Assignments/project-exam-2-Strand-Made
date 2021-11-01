import { ReactNode } from "react";
import styled from "styled-components";
import { fontSize } from "../../utils/styleHelpers";
import { fontSizes } from "../../globalStyle/_variables";

interface HeadingProps {
  size?: keyof typeof fontSizes;
  color?: string;
  children: ReactNode;
}
const H1 = styled.h1<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
`;
const H2 = styled.h2<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
`;
const H3 = styled.h3<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
`;
const H4 = styled.h4<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
`;
const H5 = styled.h5<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
`;
const H6 = styled.h6<HeadingProps>`
  font-size: ${(props) => props.size && fontSize(props.size)};
  color: ${(props) => props.color};
`;

const Heading = ({ size, color, children }: HeadingProps) => {
  return (
    <H1 color={color} size={size}>
      {children}
    </H1>
  );
};
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;

export default Heading;
