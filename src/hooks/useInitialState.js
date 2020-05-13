import { useState, useEffect } from 'react';

export function useDataCharacters() {
  const [characters, setCharacters] = useState({
    data: {
      results: [],
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(1);

  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    try {
      const API = `https://rickandmortyapi.com/api/character?page=${nextPage}`;
      const response = await fetch(API);
      const data = await response.json();
      // console.log('data', data);
      setCharacters({
        data: {
          info: data.info,
          results: [].concat(characters.data.results, data.results),
        },
      });
      setLoading(false);
      setNextPage(nextPage + 1);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
  return { characters, setCharacters, loading, setLoading, error, setError, nextPage, setNextPage, fetchCharacters };
}
