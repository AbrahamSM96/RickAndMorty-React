import { useState, useEffect } from 'react';

export function useSearchCharacter(page) {
  const [query, setQuery] = useState('');
  const [filterData, setFilterData] = useState({
    data: {
      info: [],
      results: [],
    },
  });
  const [pages, setPages] = useState({ data: { info: { pages: [] } } });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API = `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}`;

  const fetchSearchCharacter = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      setFilterData({
        data: {
          info: data.info,
          results: data.results,
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
    fetchSearchCharacter();
  }, []);
  return { query, setQuery, error, loading, filterData, fetchSearchCharacter, pages };
}
