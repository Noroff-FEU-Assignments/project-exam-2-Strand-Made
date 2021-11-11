import styled from "styled-components";
import { MdOutlineKingBed, MdOutlineWifi, MdPinDrop } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../components/Typography/Heading";
import Container from "../components/layout/Container/Container";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import IconContainer from "../components/IconsContainer/IconsContainer";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Amenitites from "../components/establishment/Amenities/Amenitites";

type EstablishmentType = {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  distance_city_centre_km: number;
  image: {
    alternativeText: string;
    url: string;
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
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
`;

const OfferList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
const Paragraph = styled.p`
  max-width: 60ch;
`;
const Emphasize = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
`;

const Box = styled.div`
  border-bottom: 1px solid var(--cool-gray-1);
`;

const Establishment = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let params = useParams();
  const { establishmentSlug } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [establishment, setEstablishment] = useState<EstablishmentType | null>(
    null
  );
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
        <>
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
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Establishment;
