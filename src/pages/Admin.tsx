import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import Enquiries from "../components/admin-dashboard/Enquiries/Enquiries";
import EstablishmentsPanel from "../components/admin-dashboard/EstablishmentsPanel/EstablishmentsPanel";
import { mediaQueries } from "../utils/styleHelpers";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${mediaQueries("md")`
  flex-direction: row;
  `}
`;

const Admin = () => {
  let navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  });
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
