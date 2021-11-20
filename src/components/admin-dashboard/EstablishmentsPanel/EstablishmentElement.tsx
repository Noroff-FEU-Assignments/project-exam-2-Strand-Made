import styled from "styled-components";
import Heading from "../../Typography/Heading";
import { Link } from "react-router-dom";
import Box from "../../layout/Box/Box";

interface IEstablishmentElement {
  name: string;
  slug?: string;
}

const Establishment = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const EstablishmentElement = ({ name, slug }: IEstablishmentElement) => {
  return (
    <Box padding="0.5rem">
      <Establishment>
        <Heading.H4>{name}</Heading.H4>
        <Link to={`/establishments/${slug}`}>View</Link>
      </Establishment>
    </Box>
  );
};

export default EstablishmentElement;
