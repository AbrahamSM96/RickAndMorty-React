import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { Paginate } from '../Paginate';
import { Container, Row, Col, FormGroup, Form } from 'reactstrap';
import { LoaderContainer, Inputt, ContainerInput, SpanIcon, ImgIcon, ContainerOutInput, Buttonn } from './styles';
import ReactPaginate from 'react-paginate';
import Lupa from '../../assets/icons/lupa.svg';
import { useDataCharacters } from '../../hooks/useDataCharacters';
import Cards from '../Cards';
import './styles.css';

export const ListOfCards = () => {
  const { characters, loading, error, setLoading, setError } = useDataCharacters();
  let { perpage, setPerpage } = useDataCharacters();

  const [filteredData, setFilteredData] = useState({
    data: {
      results: characters.data.results,
    },
  });
  // const [pageCount, setPageCount] = useState(0);
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
      const API = `https://rickandmortyapi.com/api/character/?page=${perpage}`;
      const response = await fetch(API);
      const data = await response.json();
      setLoading(false);
      setError(null);
      setFilteredData({
        data: {
          info: data.info,
          results: [].concat(data.results),
        },
      });
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    // setPageCount: Math.ceil(filteredData.data.results.length / perpage);
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
                  <Buttonn className="ml-3" outline size="md" onSubmit={(e) => handleSubmit(e)}>
                    Search
                  </Buttonn>
                </ContainerOutInput>
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <Row>
          {filteredData.data.results.map((charac) => (
            <Cards key={charac.id} {...charac} />
          ))}
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
        {/* <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'nextPage'}
          breakLabel={'...'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={10}
          breakClassName={'break-me'}
          pageCount={pages.data.info.pages}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        /> */}
      </Container>
    );
  }
};
