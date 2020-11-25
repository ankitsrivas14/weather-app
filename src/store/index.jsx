import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import storeContext from './context';
import { initialState, storeReducer } from './reducer';

const StoreProvider = ({ children }) => {
  const { Provider } = storeContext;
  const [store, dispatch] = useReducer(storeReducer, initialState);

  return (
    <Provider value={{ store, dispatch }}>{children}</Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { storeContext, StoreProvider };
