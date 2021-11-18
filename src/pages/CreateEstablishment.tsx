import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import CreateEstablishmentForm from "../components/forms/CreateEstablishment/CreateEstablishmentForm";
import { Link } from "react-router-dom";
import LinkButton from "../components/Button/LinkButton";

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
        <Link to="/admin">Go back</Link>
        <CreateEstablishmentForm />
      </Container>
    </main>
  );
};

export default CreateEstablishment;
