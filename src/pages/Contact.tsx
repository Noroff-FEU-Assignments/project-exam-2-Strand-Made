import Container from "../components/layout/Container/Container";
import ContactForm from "../components/forms/ContactForm/ContactForm";
import { useState } from "react";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";
import { FormStatus } from "../utils/globalTypes";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [error, setError] = useState(null);

  async function sendContactData(data) {
    const url = `${baseUrl}/admin-mails`;
    try {
      setStatus(FormStatus.SUBMITTING);
      const res = await axios({
        method: "POST",
        url,
        data,
      });
      if (res.data) {
        setStatus(FormStatus.SUCCESS);
      }
    } catch (error) {
      setStatus(FormStatus.ERROR);
      setError(error.toString());
    }
  }

  return (
    <Container>
      <ContactForm
        status={status}
        error={error}
        sendFormData={sendContactData}
      />
    </Container>
  );
};

export default Contact;
