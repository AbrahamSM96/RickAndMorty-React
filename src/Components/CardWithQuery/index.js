import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import { H1, Roww, Containerr, Img, ContainerLogo, Coll, ContainerButton, Buttonn, LoaderContainer } from './styles';
import { Row } from 'reactstrap';
import { withRouter } from 'react-router';
import { useSingleCharacter } from '../../hooks/useSingleCharacter';

import Logo from '../Logo';

const CardWithQuery = (props) => {
  const { id } = props;

  const { singleCharacter, loading, error } = useSingleCharacter(id);

  if (error) {
    return `Error: ${error.message}`;
  } else {
    return (
      <>
        <ContainerLogo>
          <Link to="/">
            <Logo />
          </Link>
        </ContainerLogo>
        <Containerr>
          <Roww md="2">
            <Coll>
              <figure>
                <Img src={singleCharacter.data.image} alt={singleCharacter.data.name} />
              </figure>
            </Coll>
            <Coll>
              <H1>{singleCharacter.data.name}</H1>
              <h3>{singleCharacter.data.status}</h3>
              <h3>{singleCharacter.data.species}</h3>
              <h3>{singleCharacter.data.gender}</h3>
            </Coll>
          </Roww>
          <Row>
            <ContainerButton>
              <Buttonn className="justify-content-md-start" outline size="md" onClick={() => props.history.go(-1)}>
                Return
              </Buttonn>
            </ContainerButton>
          </Row>
        </Containerr>
        {loading && (
          <LoaderContainer>
            <Loader type="pacman" />
          </LoaderContainer>
        )}
      </>
    );
  }
};
export default withRouter(CardWithQuery);
