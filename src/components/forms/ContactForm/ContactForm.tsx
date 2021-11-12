import styled from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import { PrimaryButton } from "../../Button/Button";
import Heading from "../../Typography/Heading";
import Label from "../Label/Label";
import InputContainer from "../Input/InputContainer";
import TextInput from "../Input/TextInput";
import TextBox from "../Input/TextBox";

const ContactBox = styled.div`
  background: var(--cool-gray-1);
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

const ContactForm = () => {
  return (
    <ContactBox>
      <Heading size="3xl">Contact us</Heading>
      <Form>
        <FormContainer>
          <InputContainer>
            <Label>Name</Label>
            <TextInput type="text" />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <TextInput type="text" />
          </InputContainer>
          <InputContainer>
            <Label>Message</Label>
            <TextBox />
          </InputContainer>
          <PrimaryButton>Submit</PrimaryButton>
        </FormContainer>
      </Form>
    </ContactBox>
  );
};

export default ContactForm;
