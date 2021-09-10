import axios from 'axios';
import { useEffect, useState } from 'react';

interface IReturn {
  apiData: Array<any>;
  isLoading: boolean;
  error: unknown;
}

const useFetch = (url: string): IReturn => {
  const [apiData, setApiData] = useState([] as Array<any>);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { apiData, error, isLoading };
};

export { useFetch };
