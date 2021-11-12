import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/establishment/Card/Card";
import Container from "../components/layout/Container/Container";
import FlexContainer from "../components/layout/utilities/Flex/FlexContainer";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import useToggle from "../hooks/useToggle";
import Heading from "../components/Typography/Heading";
import Modal from "../components/Modal/Modal";
import { SecondaryButton } from "../components/Button/Button";
import Grid from "../components/layout/utilities/Grid/Grid";

type EstablishmentType = {
  id: number;
  image: {
    alternativeText?: string;
    url: string;
    formats: {
      small: {
        url: string;
      };
    };
  };
  price: number;
  slug: string;
  title: string;
};
const Establishments = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [establishments, setEstablishments] = useState([]);
  const [showFilter, setShowFilter] = useToggle();

  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_URL}/establishments`;
    const fetchEstablishments = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await axios.get(url);
        setLoading(false);
        setEstablishments(res.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchEstablishments();
  }, []);

  return (
    <Container>
      <FlexContainer justifyContent="space-between" alignItems="center">
        <Heading size="xl">Establishments </Heading>
        <SecondaryButton onClick={setShowFilter}>Filter</SecondaryButton>
      </FlexContainer>
      {showFilter ? (
        <Modal>
          <Heading.H3>Filter</Heading.H3>
        </Modal>
      ) : null}
      <Spacer mt="2" />
      {loading && "Loading..."}
      {error && "An error occured"}
      <Grid gap="1.5rem">
        {establishments.map((establishment: EstablishmentType) => {
          const { id, price, slug, title } = establishment;
          const imgUrl = `${process.env.REACT_APP_BASE_URL}${establishment.image.formats.small.url}`;
          return (
            <Card
              key={id}
              price={price}
              slug={slug}
              title={title}
              img={imgUrl}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Establishments;
