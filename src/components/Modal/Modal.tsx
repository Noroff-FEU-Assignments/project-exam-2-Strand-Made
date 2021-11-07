import React from "react";
import styled from "styled-components";
import { borderRadius, shadows } from "../../globalStyle/_variables";

type ModalType = {
  children: React.ReactNode;
};

const ModalStyled = styled.div`
  background: var(--teal-1);
  padding: 2rem;
  height: 400px;
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.lg};
`;

const Modal = ({ children }: ModalType) => {
  return <ModalStyled> {children} </ModalStyled>;
};

export default Modal;
