import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const Heading = styled.h1`
  color: ${(props) => (props.color ? props.color : "var(--cool-gray-9)")};
`;

const Headings = ({ children, ...rest }: HeadingProps) => {
  return (
    <Heading as="" {...rest}>
      {children}
    </Heading>
  );
};

export default Headings;
