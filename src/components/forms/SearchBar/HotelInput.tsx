import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import { fontSizes, borderRadius } from "../../../globalStyle/_variables";

export const Input = styled.input`
  background: inherit;
  outline: none;
  width: 100%;
  border: 1px solid var(--cool-gray-3);
  border-radius: ${borderRadius.lg};
  padding: 0.5rem;
  font-size: ${fontSizes.md};
  &::placeholder {
    font-size: inherit;
  }
`;
export const Label = styled.label`
  display: flex;
  align-items: baseline;
  font-weight: 600;
`;
export const InputContainer = styled.div`
  border-radius: ${borderRadius.sm};
  padding: 0.5rem;
`;

const HotelInput = () => {
  return (
    <InputContainer>
      <FlexContainer col>
        <Label>
          <HiOutlineLocationMarker color="var(--cool-gray-6)" size={25} />
          <span>Hotel</span>
        </Label>
        <Input placeholder="Where are you staying?" />
      </FlexContainer>
    </InputContainer>
  );
};

export default HotelInput;
