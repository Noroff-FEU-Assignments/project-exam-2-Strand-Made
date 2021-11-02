import Hero from "../components/layout/Hero/Hero";
import SearchBar from "../components/forms/SearchBar/SearchBar";
import Section from "../components/layout/Section/Section";
import Container from "../components/layout/Container/Container";
import SuggestionsCard from "../components/SuggestionsCard/SuggestionsCard";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import Banner from "../components/Banner/Banner";
import Heading from "../components/Typography/Heading";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import homes from "../assets/homes.jpg";
import cabinLiving from "../assets/cabin-living.jpg";
import cityLife from "../assets/city-life.jpg";

const Home = () => {
  const Suggestions = [
    {
      title: "City Life",
      img: cityLife,
      imgAlt: "Neatly folded white towels resting at the end of the bed.",
    },
    {
      title: "Country Retreats",
      img: cabinLiving,
      imgAlt:
        "Beautiful cabin lighting up the dark forest with clear star-sudded sky",
    },
    {
      title: "Homes",
      img: homes,
      imgAlt:
        "Large house lighting up the dark autumn weather with its warm lights.",
    },
  ];

  return (
    <main>
      <Hero>
        <SearchBar />
      </Hero>
      <Spacer mb="4" />

      <Container>
        <Section>
          <Heading.H2 weight="700" size="xl">
            Looking for something special?
          </Heading.H2>
          <FlexContainer responsive="row" col gap="2rem">
            {Suggestions.map((suggestion) => {
              const { title, img, imgAlt } = suggestion;
              return (
                <SuggestionsCard title={title} img={img} imgDesc={imgAlt} />
              );
            })}
          </FlexContainer>
        </Section>
        <Spacer mb="6" />
        <Section>
          <Banner />
        </Section>
      </Container>
    </main>
  );
};

export default Home;
