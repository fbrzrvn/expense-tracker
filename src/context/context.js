import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {

  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  return (
    <ExpenseTrackerContext.Provider value={{ appName: "expense tracker" }} >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}