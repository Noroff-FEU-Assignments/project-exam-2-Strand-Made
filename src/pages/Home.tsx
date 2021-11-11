import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/layout/Hero/Hero";
import SearchBar from "../components/forms/SearchBar/SearchBar";
import Section from "../components/layout/Section/Section";
import Container from "../components/layout/Container/Container";
import SuggestionsCard from "../components/SuggestionsCard/SuggestionsCard";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import Banner from "../components/Banner/Banner";
import Heading from "../components/Typography/Heading";
import Spacer from "../components/layout/utilities/Spacer/Spacer";

type CategorySuggestion = {
  category_image: CategoryImage;
  category_suggestion_title: string;
  name: string;
  id: number;
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

  useEffect(() => {});

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
            {isLoading && <div>Is loading</div>}
            {error && <div>{error}</div>}
            {category.map((suggestion: CategorySuggestion) => {
              const { category_suggestion_title, id } = suggestion;
              const { url, alternativeText } = suggestion.category_image;
              const imageUrl = `${baseUrl}${url}`;
              return (
                <SuggestionsCard
                  key={id}
                  title={category_suggestion_title}
                  img={imageUrl}
                  imgDesc={alternativeText}
                />
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
