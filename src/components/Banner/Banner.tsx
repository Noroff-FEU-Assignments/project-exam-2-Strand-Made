import styled from "styled-components";
import {
  AiFillSafetyCertificate,
  AiFillWechat,
  AiFillCheckCircle,
} from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { borderRadius } from "../../globalStyle/_variables";
import Heading from "../Typography/Heading";
import { mediaQueries } from "../../utils/styleHelpers";
import Spacer from "../layout/utilities/Spacer/Spacer";

const BannerSection = styled.div`
  background: var(--teal-3);
  color: var(--teal-6);
  border-radius: ${borderRadius.md};
  padding: 1rem;
  ${mediaQueries("md")`
    padding: 1rem 4rem;
  `}
`;

const PromiseList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1rem 0;
  max-width: 500px;
`;

const Promise = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  color: var(--teal-6);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--teal-2);
  border-radius: 10000%;
  height: 40px;
  width: 40px;
`;

const BannerImageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const BannerImg = styled.img`
  border-radius: ${borderRadius.md};
  width: 100%;

  ${mediaQueries("md")`
  height: 260px;
  object-fit: cover;
  `}
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries("sm")`
  flex-direction: row;
`}
`;

const Banner = () => {
  return (
    <BannerSection>
      <Heading.H3 weight="700" size="2xl">
        Our Promise
      </Heading.H3>
      <Heading.H4 weight="400" size="l">
        What differs us from the others?
      </Heading.H4>
      <Spacer mt="1" />
      <Flex>
        <PromiseList>
          <Promise>
            <IconContainer>
              <AiFillCheckCircle size="32" />
            </IconContainer>
            <Heading.H5 size="md">Satisfaction guarantee</Heading.H5>
          </Promise>
          <Promise>
            <IconContainer>
              <FaWifi size="32" />{" "}
            </IconContainer>
            Free wifi at all locations
          </Promise>
          <Promise>
            <IconContainer>
              <AiFillSafetyCertificate size="32" />
            </IconContainer>
            All hosts are vetted
          </Promise>
          <Promise>
            <IconContainer>
              <AiFillWechat size="32" />
            </IconContainer>
            24/7 support
          </Promise>
        </PromiseList>
        <BannerImageContainer>
          <BannerImg
            src={
              "https://images.unsplash.com/photo-1570571054854-8f5a9f80504a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            }
            alt="Woman relaxing in a comfy chair"
          />
        </BannerImageContainer>
      </Flex>
    </BannerSection>
  );
};

export default Banner;
