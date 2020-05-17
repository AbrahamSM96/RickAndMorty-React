import React from 'react';
import { Container } from 'reactstrap';
import { Header } from '../Components/Header';
import { ListOfCards } from '../Components/ListOfCards';

const Home = (props) => {
  const { page } = props.match.params;

  return (
    <>
      <Header />
      <Container>
        <ListOfCards pageParams={page} />
      </Container>
    </>
  );
};

export default Home;
