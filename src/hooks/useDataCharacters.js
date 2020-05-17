import { useState, useEffect } from 'react';

export function useDataCharacters() {
  const [characters, setCharacters] = useState({
    data: {
      results: [],
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState({ data: { info: { pages: [] } } });
  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    try {
      const API = `https://rickandmortyapi.com/api/character`;
      const response = await fetch(API);
      const data = await response.json();
      setCharacters({
        data: {
          info: data.info,
          results: [].concat(data.results),
        },
      });
      setPages({
        data: {
          info: data.info.pages,
        },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
  return {
    characters,
    setCharacters,
    loading,
    error,
    fetchCharacters,
    pages,
    setPages,
  };
}
