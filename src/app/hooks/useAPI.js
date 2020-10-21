import { useState, useEffect, useRef, useReducer } from 'react';
import PropTypes from 'prop-types';

import api from '~config/api';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: ''
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        response: action.payload,
        isLoading: false,
        isError: ''
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        response: action.payload,
        isLoading: false,
        isError: 'Something Wrong Happened'
      };
    default:
      return { ...state };
  }
};

const useAPI = (config, initialData = {}, execute = false) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: '',
    response: initialData
  });
  const [conf, setConf] = useState(config);
  const exec = useRef(null);
  exec.current = execute;

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await api.any(conf);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE', payload: error });
        }
      }
    };

    if (exec.current) {
      fetchData();
    }

    return () => {
      didCancel = true;
    };
  }, [conf]);

  const doFetch = params => {
    setConf(prevState => ({
      ...prevState,
      ...params
    }));
    exec.current = true;
  };

  return [state, doFetch];
};

useAPI.propTypes = {
  config: PropTypes.shape({
    method: PropTypes.oneOf(['GET', 'HEAD', 'DELETE', 'LINK', 'UNLINK', 'POST', 'PUT', 'PATCH']).isRequired,
    url: PropTypes.string.isRequired,
    data: PropTypes.shape({}),
    params: PropTypes.shape({})
  }),
  execute: PropTypes.bool,
  initialData: PropTypes.shape({})
};

export default useAPI;
