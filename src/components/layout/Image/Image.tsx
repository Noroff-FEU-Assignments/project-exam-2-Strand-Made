import styled, { css } from "styled-components";
import { mediaQueries } from "../../../utils/styleHelpers";

interface IImage {
  src: string;
  alt: string;
  fullWidth?: boolean;
}

const StyledImage = styled.img<IImage>`
  width: 100%;
  object-fit: cover;

  ${(props) => {
    return (
      props.fullWidth &&
      css`
        left: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        max-width: 100vw;
        position: relative;
        right: 50%;
        width: 100vw;
        ${mediaQueries("md")`
        border-radius: inherit;
        width: 100%;
        max-width: 100%;
        position: static;
        margin: 0 auto;

        `}
      `
    );
  }}
`;

const Image = ({ src, alt, fullWidth }: IImage) => {
  return <StyledImage fullWidth={fullWidth} alt={alt} src={src} />;
};

export default Image;