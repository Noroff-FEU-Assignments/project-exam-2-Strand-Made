import styled from "styled-components";
import {
  MdEmojiFoodBeverage,
  MdShower,
  MdOutlineCleaningServices,
  MdSportsTennis,
} from "react-icons/md";
import { borderRadius } from "../../../globalStyle/_variables";
import { IconContainer } from "../../IconsContainer/IconsContainer";
import FlexContainer from "../../layout/utilities/Flex/FlexContainer";
import Heading from "../../Typography/Heading";

const BannerBox = styled.div`
  background: var(--teal-2);
  border-radius: ${borderRadius.md};
  padding: 1.5rem;
`;

type TAmenities = {
  amenities: {
    shower: boolean;
    office: boolean;
    gym: boolean;
    cleaning: boolean;
    breakfast: boolean;
  };
};

const Amenitites = ({ amenities }: TAmenities) => {
  const { breakfast, cleaning, gym, office, shower } = amenities;

  return (
    <>
      <FlexContainer gap="1.5rem" wrap="wrap">
        {breakfast && (
          <BannerBox>
            <FlexContainer gap="0.5rem" alignItems="center">
              <FlexContainer gap="0.25rem" alignItems="center">
                <div>
                  <IconContainer background="var(--cool-gray-1)">
                    <MdEmojiFoodBeverage color="var(--teal-6)" size={24} />
                  </IconContainer>
                </div>
                <div>
                  <Heading.H5 size="md">Breakfast included</Heading.H5>
                </div>
              </FlexContainer>
            </FlexContainer>
          </BannerBox>
        )}
        {shower && (
          <BannerBox>
            <FlexContainer gap="0.5rem" alignItems="center">
              <FlexContainer gap="0.25rem" alignItems="center">
                <div>
                  <IconContainer background="var(--cool-gray-1)">
                    <MdShower color="var(--teal-6)" size={24} />
                  </IconContainer>
                </div>
                <div>
                  <Heading.H5 size="md">Shower</Heading.H5>
                </div>
              </FlexContainer>
            </FlexContainer>
          </BannerBox>
        )}
        {gym && (
          <BannerBox>
            <FlexContainer gap="0.5rem" alignItems="center">
              <FlexContainer gap="0.25rem" alignItems="center">
                <div>
                  <IconContainer background="var(--cool-gray-1)">
                    <MdSportsTennis color="var(--teal-6)" size={24} />
                  </IconContainer>
                </div>
                <div>
                  <Heading.H5 size="md">Gym</Heading.H5>
                </div>
              </FlexContainer>
            </FlexContainer>
          </BannerBox>
        )}
        {cleaning && (
          <BannerBox>
            <FlexContainer gap="0.5rem" alignItems="center">
              <FlexContainer gap="0.25rem" alignItems="center">
                <div>
                  <IconContainer background="var(--cool-gray-1)">
                    <MdOutlineCleaningServices
                      color="var(--teal-6)"
                      size={24}
                    />
                  </IconContainer>
                </div>
                <div>
                  <Heading.H5 size="md">Cleaning service</Heading.H5>
                </div>
              </FlexContainer>
            </FlexContainer>
          </BannerBox>
        )}
        {office && (
          <BannerBox>
            <FlexContainer gap="0.5rem" alignItems="center">
              <FlexContainer gap="0.25rem" alignItems="center">
                <div>
                  <IconContainer background="var(--cool-gray-1)">
                    <MdOutlineCleaningServices
                      color="var(--teal-6)"
                      size={24}
                    />
                  </IconContainer>
                </div>
                <div>
                  <Heading.H5 size="md">Cleaning service</Heading.H5>
                </div>
              </FlexContainer>
            </FlexContainer>
          </BannerBox>
        )}
      </FlexContainer>
    </>
  );
};

export default Amenitites;
