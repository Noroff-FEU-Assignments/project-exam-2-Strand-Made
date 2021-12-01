/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import CreateEstablishmentForm from "../components/forms/CreateEstablishment/CreateEstablishmentForm";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import Main from "../components/layout/Main/Main";

const CreateEstablishment = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [files, setFiles] = useState(null);

  let navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  async function createEstablishment(data) {
    const url = `${baseUrl}/establishments`;
    setSuccess(false);
    setError(null);
    const res = await axios({
      method: "POST",
      url: url,
      headers: {
        Authorization: `Bearer ${auth.token} `,
      },
      data: data,
    })
      .then((res) => {
        console.log(res.data);
        const imageUpload = async (res) => {
          const uploadUrl = `${baseUrl}/upload`;
          const formData = new FormData();
          const id = res.data.id;
          formData.append("files", files);
          formData.append("refId", id);
          formData.append("ref", "establishments");
          formData.append("field", "image");

          const imageRes = await axios({
            method: "POST",
            url: uploadUrl,
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            data: formData,
          });
        };
        imageUpload(res);
      })
      .catch((err) => {
        setError(err.toString());
      });
  }

  return (
    <>
      <Helmet>
        <title>Create Establishment | Holidaze</title>
        <meta
          name="description"
          content="Creating your next establishments is a breeze with our creator"
        />
      </Helmet>
      <Main>
        <Container>
          <Heading>New Establishment</Heading>
          <Link to="/admin">Go back</Link>
          <CreateEstablishmentForm
            createEstablishment={createEstablishment}
            success={success}
            error={error}
            setFiles={setFiles}
            auth={auth}
          />
        </Container>
      </Main>
    </>
  );
};

export default CreateEstablishment;
