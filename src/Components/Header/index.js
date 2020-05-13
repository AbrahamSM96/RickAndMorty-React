import React from 'react';
import { HeaderBackground, Figure, Img } from './styles';
import rickmorty from '../../assets/rick-and-morty-family-png-5-transparent.png';

export const Header = () => {
  return (
    <HeaderBackground>
      <Figure>
        <Img src={rickmorty} alt="rick and morty" />
      </Figure>
    </HeaderBackground>
  );
};
