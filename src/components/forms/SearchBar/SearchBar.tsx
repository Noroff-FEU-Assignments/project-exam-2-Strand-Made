import styled from "styled-components";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import HotelInput from "./HotelInput";
import DateInput from "./DateInput";
import GuestInput from "./GuestInput";
import { PrimaryButton } from "../../Button/Button";
import { mediaQueries } from "../../../utils/styleHelpers";

const SearchHotel = styled.form`
  padding: 1.2rem;
  background: var(--teal-1);
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.lg};
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow-y: hidden;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  ${mediaQueries("sm")`
flex-direction: row;
`}
`;

const SearchBar = () => {
  return (
    <SearchHotel>
      <Flex>
        <HotelInput />

        <DateInput />

        <GuestInput />
        <PrimaryButton> Find Hotels</PrimaryButton>
      </Flex>
    </SearchHotel>
  );
};

export default SearchBar;
