import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import { useEffect, useState } from "react";
import Box from "../components/layout/Box/Box";
import { FetchStatus } from "../utils/globalTypes";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";

const Super = () => {
  const { auth } = useAuth();
  let navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
    if (auth.userinfo.type === "authenticated") {
      navigate("/admin");
    }
  }, [auth]);

  const [error, setError] = useState(null);
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const url = `${baseUrl}/admin-mails`;
      try {
        setStatus(FetchStatus.FETCHING);
        const res = await axios(url);
        setStatus(FetchStatus.SUCCESS);
        setMessages(res.data);
      } catch (error) {
        setStatus(FetchStatus.ERROR);
        setError(error.toString());
      }
    };
    fetchMessages();
  }, [messages]);

  return (
    <Container>
      <Heading>Dashboard</Heading>
      <Box>
        <Heading.H2>Messages</Heading.H2>
      </Box>
    </Container>
  );
};

export default Super;
