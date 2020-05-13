import { useState, useEffect } from 'react';
const API = 'https://rickandmortyapi.com/api/character/';

export function useSearchCharacter() {
  [character, setCharacter] = useState();

  const fetchSearchCharacter = async () => {
    try {
      const response = await fetch(API);
    } catch (error) {}
  };
}
