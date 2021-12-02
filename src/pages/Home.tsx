import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/layout/Hero/Hero";
import SearchBar from "../components/forms/SearchBar/SearchBar";
import Section from "../components/layout/Section/Section";
import Container from "../components/layout/Container/Container";
import SuggestionsCard from "../components/SuggestionsCard/SuggestionsCard";
import JoinUs from "../assets/join-us.webp";
import ExploreStays from "../assets/explore-stays.webp";
import Banner from "../components/Banner/Banner";
import Heading from "../components/Typography/Heading";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Grid from "../components/layout/utilities/Grid/Grid";
import Main from "../components/layout/Main/Main";
import SkeletonLoader from "../components/layout/SkeleteonLoader/SkeletonLoader";
import Switcher from "../components/layout/utilities/Switcher/Switcher";
import Box from "../components/layout/Box/Box";

type CategorySuggestion = {
  category_image: CategoryImage;
  category_suggestion_title: string;
  name: string;
  id: number;
  Slug: string;
};
type CategoryImage = {
  alternativeText: string;
  url: string;
};

const Home = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [category, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      setError(false);
      try {
        const res = await axios.get(`${baseUrl}/categories`);
        setCategories(res.data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCategories();
  }, [baseUrl]);

  return (
    <Main>
      <Hero>
        <SearchBar />
      </Hero>
      <Spacer mb="4" />
      <Container>
        <Section>
          <Heading.H2 weight="700" size="2xl">
            Looking for something special?
          </Heading.H2>
          <Grid>
            {isLoading && <SkeletonLoader numberofLoaders={3} />}
            {error && <div>{error}</div>}
            {category.map((suggestion: CategorySuggestion) => {
              const { category_suggestion_title, id, Slug } = suggestion;
              const { url, alternativeText } = suggestion.category_image;
              return (
                <SuggestionsCard
                  slug={Slug}
                  key={id}
                  title={category_suggestion_title}
                  img={url}
                  imgDesc={alternativeText}
                />
              );
            })}
          </Grid>
        </Section>
        <Spacer mb="6" />
        <Section>
          <Switcher threshold={600} limit={3} space={2}>
            <Box>
              <Banner
                heading=" Explore stays Bergen"
                to={"/establishments"}
                linkText="Explore"
                image={ExploreStays}
              />
            </Box>
            <Box>
              <Banner
                heading="Join us"
                to={"/contact"}
                linkText="Contact us"
                image={JoinUs}
              />
            </Box>
          </Switcher>
        </Section>
      </Container>
    </Main>
  );
};

export default Home;
