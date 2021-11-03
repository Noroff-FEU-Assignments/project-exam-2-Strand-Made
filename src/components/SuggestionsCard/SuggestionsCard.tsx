import styled from "styled-components";
import { borderRadius } from "../../globalStyle/_variables";
import { mediaQueries } from "../../utils/styleHelpers";
import Heading from "../Typography/Heading";

interface SuggestionProps {
  title: string;
  img: string;
  imgDesc: string;
}

const SuggestionContainer = styled.article`
  width: 100%;

  max-width: 400px;
`;
const ImageContainer = styled.a``;
const Image = styled.img`
  width: 100%;
  border-radius: ${borderRadius.md};
  ${mediaQueries("md")`
  height: 220px;
  `}
`;

const SuggestionsCard = ({ title, img, imgDesc }: SuggestionProps) => {
  return (
    <SuggestionContainer>
      <ImageContainer>
        <Image width="300" src={img} alt={imgDesc} />
      </ImageContainer>
      <Heading.H3 size="l">{title}</Heading.H3>
    </SuggestionContainer>
  );
};

export default SuggestionsCard;
