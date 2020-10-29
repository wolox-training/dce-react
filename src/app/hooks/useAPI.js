import { useState, useEffect, useRef, useReducer } from 'react';
import PropTypes from 'prop-types';

import { FETCH_ACTIONS } from '~constants/actions';
import { REST_METHODS } from '~constants/api';
import api from '~config/api';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ACTIONS.init:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_ACTIONS.success:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
        isError: false
      };
    case FETCH_ACTIONS.error:
      return {
        ...state,
        response: action.payload,
        isLoading: false,
        isError: true
      };
    default:
      return { ...state };
  }
};

const useAPI = (config, initialData = null, execute = false) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    response: initialData
  });
  const [conf, setConf] = useState(config);
  const exec = useRef(null);
  exec.current = execute;

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: FETCH_ACTIONS.init });

      try {
        const result = await api.any(conf);
        if (!didCancel) {
          dispatch({
            type: result.ok ? FETCH_ACTIONS.success : FETCH_ACTIONS.error,
            payload: result.data
          });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: FETCH_ACTIONS.error, payload: error.message });
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
    method: PropTypes.oneOf(REST_METHODS).isRequired,
    url: PropTypes.string.isRequired,
    data: PropTypes.shape({}),
    params: PropTypes.shape({})
  }),
  execute: PropTypes.bool,
  initialData: PropTypes.shape({})
};

export default useAPI;
