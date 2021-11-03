import styled from "styled-components";
import { useState } from "react";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import Enquiries from "../components/admin-dashboard/Enquiries/Enquiries";
import EstablishmentsPanel from "../components/admin-dashboard/EstablishmentsPanel/EstablishmentsPanel";
import { mediaQueries } from "../utils/styleHelpers";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${mediaQueries("md")`
  flex-direction: row;
  `}
`;

const Admin = () => {
  return (
    <Container>
      <main>
        <Heading>Welcome Admin</Heading>
        <FlexContainer>
          <Enquiries />
          <EstablishmentsPanel />
        </FlexContainer>
      </main>
    </Container>
  );
};

export default Admin;
