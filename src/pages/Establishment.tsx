import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../components/Typography/Heading";
import Container from "../components/layout/Container/Container";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import IconContainer from "../components/IconsContainer/IconsContainer";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Amenitites from "../components/establishment/Amenities/Amenitites";
import Paragraph from "../components/Typography/Paragraph";
import useToggle from "../hooks/useToggle";
import RelativeWrapper from "../components/layout/navigation/MobileNav/RelativeWrapper";
import Image from "../components/layout/Image/Image";
import Popover from "../components/layout/Popover/Popover";
import EnquireForm from "../components/forms/EnquireForm/EnquireForm";
import Box from "../components/layout/Box/Box";
import { borderRadius } from "../globalStyle/_variables";
import OfferList from "../components/establishment/OfferList/OfferList";
import Section from "../components/layout/Section/Section";
import Grid from "../components/layout/utilities/Grid/Grid";
import StayCalculator from "../components/establishment/StayCalculator/StayCalculator";
import Aside from "../components/layout/Aside/Aside";
import Switcher from "../components/layout/utilities/Switcher/Switcher";
import Emphasize from "../components/Typography/Emphasize";
import Stack from "../components/layout/Stack/Stack";

export type EstablishmentType = {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  distance_city_centre_km: number;
  image: {
    alternativeText: string;
    url: string;
    formats: {
      large: {
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
  border-radius: ${borderRadius.md};
`;

const Establishment = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let params = useParams();
  const { establishmentSlug } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(null);
  const [guests, setGuests] = useState(null);
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
          <Container>
            <ImageContainer>
              <Image
                fullWidth
                src={`${baseUrl}${establishment.image.formats.large.url}`}
                alt=""
              />
            </ImageContainer>
            <Spacer mt="1.5" />
            <Grid minWidth={400}>
              <Aside minWidth={60} asideWidth={400}>
                <Section>
                  <Heading size="2xl">{establishment.title}</Heading>
                  <OfferList establishment={establishment} />
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
                    <Box>
                      <Heading.H5 size="l">Reviews</Heading.H5>
                    </Box>
                  </FlexContainer>
                </Section>
                <Section>
                  <StayCalculator
                    setToggle={setToggle}
                    guests={guests}
                    setGuests={setGuests}
                    days={days}
                    setDays={setDays}
                    price={establishment.price}
                  />
                </Section>
              </Aside>
            </Grid>
            {toggle && (
              <Popover margin="0.5rem" position="fixed">
                <Box
                  padding="1rem"
                  borderRadius
                  background="var(--cool-gray-1)"
                >
                  <Box>
                    <FlexContainer justifyContent="space-between">
                      <Stack>
                        <Heading.H4 size="2xl">Enquire</Heading.H4>
                        <Heading.H5 size="l">
                          Staying at {establishment.title}
                        </Heading.H5>
                      </Stack>
                      <button onClick={setToggle}>
                        <IconContainer>
                          <MdClose size="24" />
                        </IconContainer>
                      </button>
                    </FlexContainer>
                  </Box>
                  <Box>
                    <Switcher>
                      <Box>
                        {guests && (
                          <span>
                            With<Emphasize> {guests}</Emphasize> guests
                          </span>
                        )}
                      </Box>
                      <Box>
                        {days && (
                          <span>
                            For <Emphasize>{days}</Emphasize> days
                          </span>
                        )}
                      </Box>
                    </Switcher>
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
