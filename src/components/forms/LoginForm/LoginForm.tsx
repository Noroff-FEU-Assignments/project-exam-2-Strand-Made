import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";
import Label from "../Label/Label";
import InputContainer from "../Input/InputContainer";
import TextInput from "../Input/TextInput";
import { PrimaryButton, SecondaryButton } from "../../Button/Button";
import { baseUrl } from "../../../api/baseUrl";
import { useAuth } from "../../../context/AuthContext";

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

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { auth, setAuth } = useAuth();
  const loginUser = async (user: FormData) => {
    try {
      const res = axios
        .post(`${baseUrl}/auth/local`, {
          identifier: user.email,
          password: user.password,
        })
        .then((res) => {
          const { jwt } = res.data;
          const { email } = res.data.user;

          const userType = res.data.user.role.type;
          const user = {
            token: jwt,
            userinfo: {
              type: userType,
              email,
            },
          };
          setAuth(user);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit((user) => loginUser(user));
  return (
    <Modal>
      <FlexContainer col alignItems="center">
        <Heading size="xl">Login</Heading>
        <Form onSubmit={onSubmit}>
          <FormContainer>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <TextInput
                {...register("email")}
                name="email"
                type="email"
                placeholder="Your email"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Password</Label>
              <TextInput
                {...register("password")}
                name="password"
                type="password"
                placeholder="Your password"
              />
            </InputContainer>
            <FlexContainer col gap="0.75rem">
              <PrimaryButton size="md" full>
                Login
              </PrimaryButton>
              <SecondaryButton>Sign Up</SecondaryButton>
            </FlexContainer>
          </FormContainer>
        </Form>
      </FlexContainer>
    </Modal>
  );
};

export default LoginForm;
