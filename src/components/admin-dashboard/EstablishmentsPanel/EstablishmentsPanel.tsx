import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";
import { mediaQueries } from "../../../utils/styleHelpers";
import { PrimaryButton } from "../../Button/Button";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Spacer from "../../layout/utilities/Spacer/Spacer";
import Heading from "../../Typography/Heading";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mediaQueries("md")`
width: 500px;
`}
`;
const EstablishmentsList = styled.div`
  background: var(--cool-gray-2);
  padding: 1rem;
  border-radius: ${borderRadius.sm};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Establishment = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const EstablishmentsPanel = () => {
  return (
    <Box>
      <Heading.H2>Establishments</Heading.H2>
      <EstablishmentsList>
        <Header>
          <Heading.H3 weight="400">Name</Heading.H3>
          <Heading.H3 weight="400">Edit</Heading.H3>
        </Header>
        <Establishment>
          Royal Hotel
          <a href="/">Edit</a>
        </Establishment>
      </EstablishmentsList>
      <Spacer mt="1" />
      <FlexContainer justifyContent="end">
        <PrimaryButton size="md">Create new</PrimaryButton>
      </FlexContainer>
    </Box>
  );
};

export default EstablishmentsPanel;
