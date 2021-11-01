import Hero from "../components/layout/Hero/Hero";
import SearchBar from "../components/forms/SearchBar/SearchBar";
import Section from "../components/layout/Section/Section";
import Headings from "../components/Typography/Headings";
import Container from "../components/layout/Container/Container";
import SuggestionsCard from "../components/SuggestionsCard/SuggestionsCard";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import Banner from "../components/Banner/Banner";
import Heading from "../components/Typography/Heading";

const Home = () => {
  return (
    <div>
      <Hero>
        <SearchBar />
      </Hero>
      <Section>
        <Container>
          <Heading.H2 size="2xl">Looking for something special?</Heading.H2>
          <FlexContainer col gap="3rem">
            <SuggestionsCard
              title="City Life"
              img={
                "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80"
              }
              imgDesc="Hotelroom"
            />
            <SuggestionsCard
              title="Country Retreats"
              img={
                "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80"
              }
              imgDesc="Hotelroom"
            />
            <SuggestionsCard
              title="Homes"
              img={
                "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80"
              }
              imgDesc="Hotelroom"
            />
          </FlexContainer>
          <Section>
            <Banner />
          </Section>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
