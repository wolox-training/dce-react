import React, { createContext, useReducer, useContext } from 'react';

export default function makeStore(reducer, initialState) {
  const dispatchContext = createContext();
  const storeContext = createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);
    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  function useDispatch() {
    return useContext(dispatchContext);
  }

  function useStore() {
    return useContext(storeContext);
  }

  return [StoreProvider, useStore, useDispatch];
}
