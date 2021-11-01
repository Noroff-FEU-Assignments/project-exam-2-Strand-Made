import styled from "styled-components";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import { borderRadius } from "../../../globalStyle/_variables";
import HotelInput from "./HotelInput";
import DateInput from "./DateInput";
import GuestInput from "./GuestInput";
import Button from "../../Button/Button";

const SearchHotel = styled.form`
  padding: 1.2rem;
  background: var(--teal-1);
  border-radius: ${borderRadius.md};
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow-y: hidden;
`;

const SearchBar = () => {
  return (
    <SearchHotel>
      <FlexContainer col gap="0.75rem">
        <HotelInput />

        <DateInput />

        <GuestInput />
        <Button> Search</Button>
      </FlexContainer>
    </SearchHotel>
  );
};

export default SearchBar;
