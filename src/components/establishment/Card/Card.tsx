import { Link } from "react-router-dom";
import styled from "styled-components";
import { borderRadius } from "../../../globalStyle/_variables";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";
import Demphasize from "../../Typography/DeEmphasize";

interface EstablishmentPropTypes {
  img?: string;
  title?: string;
  price?: number;
  slug: string;
  id?: number;
}

const EstablishmentCard = styled.div``;
const CardLink = styled(Link)``;

const Image = styled.img`
  border-radius: ${borderRadius.md};
  width: 100%;
`;

const Card = ({ img, title, price, slug, id }: EstablishmentPropTypes) => {
  return (
    <EstablishmentCard>
      <div>
        <CardLink to={`${slug}`}>
          <Image src={img} alt="Hello" />
        </CardLink>
      </div>
      <FlexContainer justifyContent="space-between" alignItems="center">
        <Heading.H2 weight="400" size="xl">
          {title}
        </Heading.H2>
        <div>
          <Heading.H3 color="var(--blue-6)">
            $ {price} <Demphasize>/ Night</Demphasize>
          </Heading.H3>
        </div>
      </FlexContainer>
    </EstablishmentCard>
  );
};

export default Card;
