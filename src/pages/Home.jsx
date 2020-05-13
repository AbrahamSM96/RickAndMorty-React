import React from 'react';
import { Container } from 'reactstrap';
import { Header } from '../Components/Header';
import { ListOfCards } from '../Components/ListOfCards';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ListOfCards />
      </Container>
    </>
  );
};

export default Home;
