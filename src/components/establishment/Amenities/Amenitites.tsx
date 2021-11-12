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
type amenity = {
  breakfast: boolean;
  shower: boolean;
  gym: boolean;
  office: boolean;
  cleaning: boolean;
};

type amenities = [amenity];
type AmenititesProps = {
  amenities: amenities;
};
const Amenitites = ({ amenities }: AmenititesProps) => {
  const iconCheck = (amenity: amenity) => {
    const { breakfast, cleaning, gym, office, shower } = amenity;
    return (
      <>
        {breakfast && <MdEmojiFoodBeverage color="var(--teal-6)" size={24} />}
        {shower && <MdShower color="var(--teal-6)" size={24} />}
        {gym && <MdSportsTennis color="var(--teal-6)" size={24} />}
        {office && <MdShower color="var(--teal-6)" size={24} />}
        {cleaning && (
          <MdOutlineCleaningServices color="var(--teal-6)" size={24} />
        )}
      </>
    );
  };

  return (
    <FlexContainer gap="1.5rem" wrap="wrap">
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
    </FlexContainer>
  );
};

export default Amenitites;
