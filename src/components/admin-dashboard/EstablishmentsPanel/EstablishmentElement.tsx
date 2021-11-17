import styled from "styled-components";
import Heading from "../../Typography/Heading";
import { Link } from "react-router-dom";

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
    <div>
      <Establishment>
        <Heading.H4>{name}</Heading.H4>
        <Link to={`/establishments/${slug}`}>View</Link>
      </Establishment>
    </div>
  );
};

export default EstablishmentElement;
