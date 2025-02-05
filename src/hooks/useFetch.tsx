import { useState, useEffect } from 'react';
import http from '../api/http';

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        if (url) {
          const res = await http.get(url);
          setData(res.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}