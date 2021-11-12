import styled from "styled-components";
import {
  MdOutlineKingBed,
  MdOutlineWifi,
  MdPinDrop,
  MdClose,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../components/Typography/Heading";
import Container from "../components/layout/Container/Container";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import IconContainer from "../components/IconsContainer/IconsContainer";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Amenitites from "../components/establishment/Amenities/Amenitites";
import { borderRadius } from "../globalStyle/_variables";
import Emphasize from "../components/Typography/Emphasize";
import Paragraph from "../components/Typography/Paragraph";
import { PrimaryButton } from "../components/Button/Button";
import useToggle from "../hooks/useToggle";
import RelativeWrapper from "../components/layout/navigation/MobileNav/RelativeWrapper";
import Modal from "../components/Modal/Modal";
import Popover from "../components/layout/Popover/Popover";
import EnquireForm from "../components/forms/EnquireForm/EnquireForm";
import Box from "../components/layout/Box/Box";

type EstablishmentType = {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  distance_city_centre_km: number;
  image: {
    alternativeText: string;
    url: string;
    formats: {
      medium: {
        url: string;
      };
    };
  };
  amenities: [
    {
      breakfast: boolean;
      shower: boolean;
      gym: boolean;
      office: boolean;
      cleaning: boolean;
    }
  ];
  description: string;
};

const ImageContainer = styled.div`
  max-width: 100%;
`;
const Image = styled.img`
  width: 100%;
`;

const OfferList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Establishment = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let params = useParams();
  const { establishmentSlug } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [establishment, setEstablishment] = useState<EstablishmentType | null>(
    null
  );
  const [toggle, setToggle] = useToggle(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchEstablishment = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${baseUrl}/establishments?slug=${establishmentSlug}`
        );
        const data = res.data[0];
        setEstablishment(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEstablishment();
  }, [baseUrl, establishmentSlug]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {establishment ? (
        <RelativeWrapper>
          <ImageContainer>
            <Image src={`${baseUrl}${establishment.image.url}`} alt="" />
          </ImageContainer>
          <Container>
            <Heading size="2xl">{establishment.title}</Heading>
            <OfferList>
              <li>
                <FlexContainer gap="0.5rem" alignItems="center">
                  <IconContainer>
                    <MdOutlineKingBed
                      color="var(--teal-6)"
                      aria-label="Bedrooms"
                      size={24}
                    />
                  </IconContainer>
                  <Emphasize>{establishment.bedrooms}</Emphasize>
                </FlexContainer>
              </li>
              <li>
                <FlexContainer gap="0.5rem" alignItems="center">
                  <IconContainer>
                    <MdOutlineWifi
                      color="var(--teal-6)"
                      aria-label="Wifi signal"
                      size={24}
                    />
                  </IconContainer>
                  <Emphasize>Free Wifi</Emphasize>
                </FlexContainer>
              </li>
              <li>
                <FlexContainer gap="0.5rem" alignItems="center">
                  <IconContainer>
                    <MdPinDrop
                      color="var(--teal-6)"
                      aria-label="Distance to city center"
                      size={24}
                    />
                  </IconContainer>
                  <Emphasize>
                    {establishment.distance_city_centre_km} km to city center
                  </Emphasize>
                </FlexContainer>
              </li>
            </OfferList>
            <Spacer mt="2" />
            <FlexContainer col gap="1.5rem">
              <Box>
                <PrimaryButton onClick={setToggle} size="md">
                  Enquire
                </PrimaryButton>
              </Box>
              <Box>
                <Heading.H3 size="l">Description</Heading.H3>
                <Paragraph>{establishment.description}</Paragraph>
              </Box>
              <Box>
                <Heading.H4 size="l">Amenities</Heading.H4>
                <Amenitites amenities={establishment.amenities} />
              </Box>
              {/* more details */}
              {/* location  */}
            </FlexContainer>
            {toggle && (
              <Popover margin="0.5rem" position="fixed">
                <Box
                  padding="1rem"
                  borderRadius
                  background="var(--cool-gray-1)"
                >
                  <Box>
                    <FlexContainer justifyContent="space-between">
                      <Heading>Enquire</Heading>
                      <button onClick={setToggle}>
                        <IconContainer>
                          <MdClose size="24" />
                        </IconContainer>
                      </button>
                    </FlexContainer>
                  </Box>
                  <EnquireForm />
                </Box>
              </Popover>
            )}
          </Container>
        </RelativeWrapper>
      ) : null}
    </>
  );
};

export default Establishment;
