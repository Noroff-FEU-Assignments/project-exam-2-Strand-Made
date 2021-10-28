import React from "react";
import styled from "styled-components";

interface FlexProps {
  col?: boolean;
  gap?:
    | "0.25rem"
    | "0.5rem"
    | "0.75rem"
    | "1rem"
    | "1.5rem"
    | "2rem"
    | "3rem"
    | "4rem"
    | "6rem"
    | "8rem"
    | "12rem"
    | "16rem"
    | "24rem"
    | "32rem";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "end"
    | "space-evenly";

  alignContent?: "start" | "center" | "space-between" | "space-around";
  alignItems?: "stretch" | "center" | "start" | "end";
  children: React.ReactNode;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  align-content: ${(props) => props.alignContent};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

const FlexContainer = ({
  col,
  gap,
  justifyContent,
  alignContent,
  alignItems,
  children,
}: FlexProps) => {
  return (
    <Flex
      col={col}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      alignContent={alignContent}
    >
      {children}
    </Flex>
  );
};

export default FlexContainer;
