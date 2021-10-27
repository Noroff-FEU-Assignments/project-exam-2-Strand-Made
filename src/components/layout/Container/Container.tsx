import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactChild;
}

const Container = styled.div<ContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default Container;
