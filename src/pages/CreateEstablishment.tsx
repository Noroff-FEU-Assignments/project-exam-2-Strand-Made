import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import CreateEstablishmentForm from "../components/forms/CreateEstablishment/CreateEstablishmentForm";

const CreateEstablishment = () => {
  let navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <main>
      <Container>
        <Heading>New Establishment</Heading>
        <CreateEstablishmentForm />
      </Container>
    </main>
  );
};

export default CreateEstablishment;
