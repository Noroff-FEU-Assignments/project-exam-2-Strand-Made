import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { borderRadius, shadows } from "../../../globalStyle/_variables";

const List = styled.ul`
  position: absolute;
  left: 0;
  padding: 2rem;
  box-shadow: ${shadows.md};
  border-radius: ${borderRadius.md};
  top: 50%;
  margin-top: 0.5rem;
  width: 100%;
  background: var(--teal-1);
`;

const ResultItem = styled.li`
  padding: 0.5rem;
  font-weight: 600;
  border-radius: ${borderRadius.md};
  &:hover {
    background: var(--teal-2);
  }
  a {
    display: block;
  }
`;
const SearchLink = styled(Link)``;

interface ListProps {
  search: string;
  setSearch: any;
  establishments: {
    id: number;
    title: string;
  }[];
}

const SearchResultList = ({ establishments, search, setSearch }: ListProps) => {
  const [lengthCheck, setLengthCheck] = useState(false);
  useEffect(() => {
    if (establishments.length > 10) {
      setLengthCheck(true);
      establishments.length = 8;
    }
  }, [establishments]);

  return (
    <List>
      {establishments.map((establishment) => (
        <ResultItem key={establishment.id}>
          <Link to="/">
            <span
              onClick={() => {
                const title = establishment.title;
                setSearch(title);
              }}
            >
              {establishment.title}
            </span>
          </Link>
        </ResultItem>
      ))}
      {lengthCheck && (
        <li>
          <Link to="/">View all results</Link>
        </li>
      )}
    </List>
  );
};

export default SearchResultList;
