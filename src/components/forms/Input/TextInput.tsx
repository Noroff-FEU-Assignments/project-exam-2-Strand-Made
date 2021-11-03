import styled from "styled-components";
import { fontSizes } from "../../../globalStyle/_variables";
const TextInput = styled.input`
  background: inherit;
  outline: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--cool-gray-2);

  padding: 0.5rem;
  font-size: ${fontSizes.md};
  &::placeholder {
    font-size: inherit;
  }
  &:focus {
    border-bottom: 1px solid var(--cool-gray-5);
  }
`;

export default TextInput;
