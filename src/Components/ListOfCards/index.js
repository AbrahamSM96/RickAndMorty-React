import React, { useState, useEffect, useMemo } from 'react';
import Loader from 'react-loaders';
import { Container, Row, Button, Col, FormGroup, Form } from 'reactstrap';
import { LoaderContainer, Inputt, ContainerInput, SpanIcon, ImgIcon, ContainerOutInput } from './styles';
import Lupa from '../../assets/icons/lupa.svg';

import { useDataCharacters } from '../../hooks/useInitialState';
import Cards from '../Cards';

export const ListOfCards = () => {
  const { characters, loading, error, fetchCharacters, setLoading, setError, nextPage, setNextPage } = useDataCharacters();

  const [filteredData, setFilteredData] = useState({
    data: {
      results: characters.data.results,
    },
  });
  const [query, setQuery] = useState('');
  // function useSearchCharacters(characters) {

  //   useMemo(() => {
  //     const result = characters.filter((char) => {
  //       return `${char.name}`.toLowerCase().includes(query.toLowerCase());
  //     });
  //     setFilteredData(result);
  //   }, [characters, query]);
  //   return { query, setQuery, filteredData };
  // }
  // const { query, setQuery, filteredData } = useSearchCharacters(characters);
  const fetchApiFiltered = async () => {
    setLoading(true);
    setError(null);
    try {
      const API = `https://rickandmortyapi.com/api/character/?name=${query}`;
      const response = await fetch(API);
      const data = await response.json();
      console.log('dataaaa', data);
      setLoading(false);
      setError(null);
      setFilteredData({
        data: {
          info: data.info,
          results: [].concat(data.results),
        },
      });
      setNextPage(nextPage + 1);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchApiFiltered();
  }, []);
  const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const charactersFilter = characters.data.results.filter((character) => {
    //     return character.name.toLowerCase().includes(query.toLowerCase());
    //   });
    //   setCharacters({
    //     ...characters,
    //     listFilter: { results: charactersFilter },
    //   });
    e.preventDefault();
    fetchApiFiltered();
  };

  if (error) {
    return `Error: ${error.message}`;
  } else {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormGroup>
                <ContainerOutInput>
                  <ContainerInput>
                    <SpanIcon>
                      <ImgIcon src={Lupa} alt="icon lupa" />
                    </SpanIcon>
                    <Inputt
                      type="text"
                      id="character"
                      placeholder="Search..."
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                      name="search"
                      value={query}
                    />
                  </ContainerInput>
                  <Button className="ml-3" outline color="success" size="md" onSubmit={(e) => handleSubmit(e)}>
                    Search
                  </Button>
                </ContainerOutInput>
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <Row>
          {filteredData.data.results.map((charac) => (
            <Cards key={charac.id} {...charac} />
          ))}
          {console.log('filteeeer', filteredData)}
        </Row>

        {loading && (
          <LoaderContainer>
            <Loader type="pacman" />
          </LoaderContainer>
        )}
        {/* {!loading && filteredData ? (
          <Button outline color="success" size="lg" block onClick={() => fetchApiFiltered()}>
            Load More
          </Button>
        ) : (
          <Button outline color="success" size="lg" block onClick={() => fetchCharacters()}>
            Load More
          </Button>
        )} */}
      </Container>
    );
  }
};
