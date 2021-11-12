import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";

const TextBox = styled.textarea`
  width: 100%;
  background: var(--cool-gray-1);
  border: 1px solid var(--cool-gray-2);
  border-radius: ${borderRadius.sm};
  padding: 0.5rem;
  resize: none;
`;

export default TextBox;
