import styled from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";
import Label from "../Label/Label";
import InputContainer from "../Input/InputContainer";
import TextInput from "../Input/TextInput";
import { PrimaryButton, SecondaryButton } from "../../Button/Button";

const Form = styled.form`
  width: 100%;
  padding: 1rem;
`;
const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Modal = styled.div`
  background: var(--teal-1);
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.md};
  padding: 1rem;
`;

const LoginForm = () => {
  return (
    <Modal>
      <FlexContainer col alignItems="center">
        <Heading size="xl">Login</Heading>
        <Form>
          <FormContainer>
            <InputContainer>
              <Label>Email</Label>
              <TextInput type="email" placeholder="Your email" />
            </InputContainer>
            <InputContainer>
              <Label>Password</Label>
              <TextInput type="password" placeholder="Your password" />
            </InputContainer>
            <FlexContainer col gap="0.75rem">
              <PrimaryButton full>Login</PrimaryButton>
              <SecondaryButton>Sign Up</SecondaryButton>
            </FlexContainer>
          </FormContainer>
        </Form>
      </FlexContainer>
    </Modal>
  );
};

export default LoginForm;
