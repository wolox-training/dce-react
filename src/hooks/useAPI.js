import { useState, useEffect } from 'react';
import { create } from 'apisauce';
import PropTypes from 'prop-types';

const useAPI = (method, payload, defaultURL) => {
  const [data, setData] = useState(false);
  const [url, setUrl] = useState(defaultURL || null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getOption = () => {
      if (['GET', 'HEAD', 'DELETE', 'LINK', 'UNLINK'].includes(method)) {
        return 'params';
      }
      return 'data';
    };

    const api = create({
      baseURL: 'http://polls.apiblueprint.org/api/v1/',
      headers: {}
    });

    const config = {
      method,
      url,
      [getOption()]: payload
    };

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await api.any(config);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    if (url) {
      fetchData();
    }
  }, [method, payload, url]);

  return [{ data, isLoading, isError }, setUrl];
};

useAPI.propTypes = {
  method: PropTypes.oneOf(['GET', 'HEAD', 'DELETE', 'LINK', 'UNLINK', 'POST', 'PUT', 'PATCH']).isRequired,
  defaultURL: PropTypes.string,
  payload: PropTypes.shape({})
};

export default useAPI;
