import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import { PrimaryButton } from "../../Button/Button";
import Heading from "../../Typography/Heading";
import Label from "../Label/Label";
import Input from "../Input/Input";
import TextBox from "../Input/TextBox";
import Stack from "../../layout/Stack/Stack";
import Box from "../../layout/Box/Box";
import { useEffect, useState } from "react";
import Message from "../../Message/Message";

const ContactBox = styled.div`
  background: white;
  border-radius: ${borderRadius.md};
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: ${shadows.sm};
`;

const FormContainer = styled.div`
  max-width: 400px;
`;

const Form = styled.form``;

const schema = yup.object({
  name: yup.string(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

const ContactForm = ({ status, sendFormData, error }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const contactData = {
      from_email: data.email,
      from_name: data.name,
      message,
      subject,
    };
    sendFormData(contactData);
  };

  useEffect(() => {
    if (status === "success") {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }, [status]);

  return (
    <ContactBox>
      <Heading size="3xl">Contact us</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {error && <Message.Error>{error}</Message.Error>}
        <FormContainer>
          <Stack space={1}>
            <Box>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                {...register("name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <Message.Error>{errors.name.message}</Message.Error>
              )}
            </Box>
            <Box>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                name="email"
                {...register("email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <Message.Error>{errors.email.message}</Message.Error>
              )}
            </Box>
            <Box>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                name="subject"
                {...register("subject")}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && (
                <Message.Error>{errors.subject.message}</Message.Error>
              )}
            </Box>
            <Box>
              <Label htmlFor="message">Message</Label>
              <TextBox
                name="message"
                {...register("message")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <Message.Error>{errors.message.message}</Message.Error>
              )}
            </Box>
            <Stack>
              <PrimaryButton full size="md">
                {status === "idle" && "Submit"}
                {status === "submitting" && "Submitting..."}
                {status === "success" && "Message sent!"}
                {!status && "Submit"}
              </PrimaryButton>
            </Stack>
          </Stack>
        </FormContainer>
      </Form>
    </ContactBox>
  );
};

export default ContactForm;
