import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";

const Input = styled.input`
  border: 1px solid var(--cool-gray-2);
  padding: 0.5rem;
  background: white;
  width: 100%;
  border-radius: ${borderRadius.md};
  outline: none;
  &:focus {
    border: 1px solid var(--cool-gray-3);
  }
`;

export default Input;
