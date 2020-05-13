import React, { useState, useEffect } from 'react';
import { Col, FormGroup, Form, Row } from 'reactstrap';
import { Inputt, ContainerInput, SpanIcon, ImgIcon } from './styles';
import Lupa from '../../assets/icons/lupa.svg';
import { useDataCharacters } from '../../hooks/useInitialState';
const Search = () => {
  const [form, useForm] = useState({
    form: { search: '' },
  });
  const [filteredData, useFilteredData] = useState();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const charactersFilter = characters.data.results.filter((character) => {
    //     return character.name.toLowerCase().includes(query.toLowerCase());
    //   });
    //   setCharacters({
    //     ...characters,
    //     listFilter: { results: charactersFilter },
    //   });
  };

  const handleChange = (e) => {
    form.form.search = e.target.value;
    console.log(form);
    console.log('query', e.target.value);
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <ContainerInput>
              <SpanIcon>
                <ImgIcon src={Lupa} alt="icon lupa" />
              </SpanIcon>
              <Inputt type="text" id="character" placeholder="Search..." onChange={(e) => handleChange(e)} name="search" />
            </ContainerInput>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};
export default Search;
