import { useState, useEffect } from 'react';

export function useSearchCharacter() {
  const [query, setQuery] = useState('');
  const [filterData, setFilterData] = useState({
    data: {
      info: [],
      results: [],
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API = `https://rickandmortyapi.com/api/character/?name=${query}`;

  const fetchSearchCharacter = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API);
      const data = await response.json();
      setFilterData({
        data: {
          info: data.info,
          results: data.results,
        },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchSearchCharacter();
  });
  return { query, setFilterData, error, loading };
}
