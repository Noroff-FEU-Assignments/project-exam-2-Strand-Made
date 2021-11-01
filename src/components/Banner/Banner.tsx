import styled from "styled-components";
import {
  HiOutlineChatAlt2,
  HiOutlineWifi,
  HiOutlineBadgeCheck,
  HiOutlineEmojiHappy,
} from "react-icons/hi";
import { borderRadius } from "../../globalStyle/_variables";
import FlexContainer from "../layout/utilities/Flex/FlexContainer";

import Headings from "../Typography/Headings";
import Heading from "../Typography/Heading";

const BannerSection = styled.section`
  background: var(--teal-3);
  color: var(--teal-6);
  border-radius: ${borderRadius.md};
  padding: 1rem;
`;

const BannerPromise = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BannerImg = styled.img`
  border-radius: ${borderRadius.md};
`;

const Banner = () => {
  return (
    <BannerSection>
      <Headings>Our Promises</Headings>
      <Heading.H2 size="xl"> This is a h2 Heading</Heading.H2>
      <FlexContainer col>
        <BannerPromise>
          <HiOutlineChatAlt2 color={"var(--teal-5)"} size={24} />
          <Headings as="h5">24/7 Contact</Headings>
        </BannerPromise>
        <BannerPromise>
          <HiOutlineWifi color={"var(--teal-5)"} size={24} />
          <Headings as="h5">24/7 Contact</Headings>
        </BannerPromise>
        <BannerPromise>
          <HiOutlineBadgeCheck color={"var(--teal-5)"} size={24} />
          <Headings as="h5">24/7 Contact</Headings>
        </BannerPromise>
        <BannerPromise>
          <HiOutlineEmojiHappy color={"var(--teal-5)"} size={24} />
          <Headings as="h5">24/7 Contact</Headings>
        </BannerPromise>
        <BannerImg
          src={
            "https://images.unsplash.com/photo-1570571054854-8f5a9f80504a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          alt="Woman relaxing in a comfy chair"
        />
      </FlexContainer>
    </BannerSection>
  );
};

export default Banner;
