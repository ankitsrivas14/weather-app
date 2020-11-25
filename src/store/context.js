// store.js
import { createContext } from 'react';
import { initialState } from './reducer';

const storeContext = createContext(initialState);

export default storeContext;
