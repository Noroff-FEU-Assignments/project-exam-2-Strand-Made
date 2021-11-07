import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import InputContainer from "../Input/InputContainer";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import TextInput from "../Input/TextInput";
import Label from "../Label/Label";
import { PrimaryButton } from "../../Button/Button";
import SearchResultList from "./SearchResults";
import { mediaQueries } from "../../../utils/styleHelpers";

const SearchHotel = styled.form`
  position: relative;
  padding: 1.2rem;
  background: var(--teal-1);
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.lg};
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  ${mediaQueries("sm")`
flex-direction: row;
`}
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
`;

const SearchBar = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getEstablishments = async () => {
      try {
        const res = await axios.get(`${baseUrl}/establishments`);

        setHotels(res.data);
      } catch (error) {
        setError(true);
      }
    };
    getEstablishments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SearchHotel>
      <Flex>
        <InputContainer>
          <FlexContainer col>
            <Label>
              <HiOutlineLocationMarker color="var(--cool-gray-6)" size={25} />
              <span>Hotel</span>
            </Label>
            <TextInput
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Where are you staying?"
            />
          </FlexContainer>
        </InputContainer>
        <ButtonContainer>
          <PrimaryButton size="md"> Search</PrimaryButton>
        </ButtonContainer>
      </Flex>
      {error && <div>An error occured!</div>}
      {search ? (
        <SearchResultList
          search={search}
          setSearch={setSearch}
          establishments={hotels}
        />
      ) : null}
    </SearchHotel>
  );
};

export default SearchBar;
