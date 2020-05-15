import { useState, useEffect } from 'react';

export function useSingleCharacter(id) {
  const [singleCharacter, setSingleCharacter] = useState({ data: {} });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchCharacter = async () => {
    setLoading(true);
    setError(null);
    try {
      const API = `https://rickandmortyapi.com/api/character/${id}`;
      const response = await fetch(API);
      const data = await response.json();
      console.log(data, 'usesingle');
      setSingleCharacter({
        data: data,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return { singleCharacter, loading, error };
}
