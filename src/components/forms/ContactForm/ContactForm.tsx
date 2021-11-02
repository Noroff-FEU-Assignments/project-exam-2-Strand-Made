import styled from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import Heading from "../../Typography/Heading";
import { Input, Label, InputContainer } from "../SearchBar/HotelInput";

const ContactBox = styled.div`
  background: var(--teal-1);
  border-radius: ${borderRadius.md};
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: ${shadows.sm};
`;

const Form = styled.form``;

const ContactForm = () => {
  return (
    <ContactBox>
      <Heading size="3xl">Contact us</Heading>
      <Form>
        <InputContainer>
          <Label>Name</Label>
          <Input type="text" />
        </InputContainer>
        <InputContainer>
          <Label>Email</Label>
          <Input type="text" />
        </InputContainer>
      </Form>
    </ContactBox>
  );
};

export default ContactForm;
