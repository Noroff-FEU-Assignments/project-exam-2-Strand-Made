import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputContainer from "../Input/InputContainer";
import TextInput from "../Input/TextInput";
import Label from "../Label/Label";
import TextBox from "../Input/TextBox";
import { PrimaryButton } from "../../Button/Button";
import Message from "../../Message/Message";

const Form = styled.form`
  width: 350px;
  background: var(--cool-gray-1);
  padding: 1rem;
`;

const schema = yup.object({
  firstName: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const EnquireForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label htmlFor="firstName"> Your name </Label>
        <TextInput
          aria-invalid={errors.firstName ? "true" : "false"}
          type="text"
          id="firstName"
          {...register("firstName")}
        />
        {errors.firstName && (
          <Message.Error>{errors.firstName.message}</Message.Error>
        )}
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email"> Your email </Label>
        <TextInput
          type="email"
          aria-invalid={errors.email ? "true" : "false"}
          id="email"
          {...register("email")}
        />
        {errors.email && <Message.Error>{errors.email.message}</Message.Error>}
      </InputContainer>
      <InputContainer>
        <Label htmlFor="message"> Enquiry </Label>
        <TextBox
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message")}
        />
        {errors.message && (
          <Message.Error>{errors.message.message}</Message.Error>
        )}
      </InputContainer>
      <InputContainer>
        <PrimaryButton type="submit" size="md">
          Submit
        </PrimaryButton>
      </InputContainer>
    </Form>
  );
};

export default EnquireForm;
