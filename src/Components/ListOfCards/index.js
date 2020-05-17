import React, { useEffect } from 'react';
import Loader from 'react-loaders';
import { Paginate } from '../Paginate';
import { Container, Row, Col, FormGroup, Form } from 'reactstrap';
import { LoaderContainer, Inputt, ContainerInput, SpanIcon, ImgIcon, ContainerOutInput, Buttonn } from './styles';
import Lupa from '../../assets/icons/lupa.svg';
import { useSearchCharacter } from '../../hooks/useSearchCharacter';
import Cards from '../Cards';

const ListOfCards = ({ pageParams }) => {
  const page = Number(pageParams || 1);
  const { filterData, loading, error, fetchSearchCharacter, setQuery, query } = useSearchCharacter(page);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSearchCharacter();
  };

  useEffect(() => {
    fetchSearchCharacter();
  }, [pageParams, page]);

  if (error) {
    return `Error: ${error.message}`;
  } else {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={(event) => handleSubmit(event)}>
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
                      name="name"
                      value={query}
                    />
                  </ContainerInput>
                  <Buttonn className="ml-3" outline size="md" onSubmit={(event) => handleSubmit(event)}>
                    Search
                  </Buttonn>
                </ContainerOutInput>
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <Row>
          {filterData.data.results.map((charac) => (
            <Cards key={charac.id} {...charac} />
          ))}
        </Row>

        {loading && (
          <LoaderContainer>
            <Loader type="pacman" />
          </LoaderContainer>
        )}
        <Paginate pageParams={pageParams} />
      </Container>
    );
  }
};

export const ListOfCardsComponent = React.memo(ListOfCards);
