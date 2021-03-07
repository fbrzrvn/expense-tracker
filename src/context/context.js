import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';
import { CREATE, DELETE } from '../constants/actionTypes';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {

  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const createTransaction = transaction => {
    dispatch({
      type: CREATE,
      payload: transaction
    })
  }

  const deleteTransaction = id => {
    dispatch({
      type: DELETE,
      payload: id
    })
  }

  console.log(transactions);

  return (
    <ExpenseTrackerContext.Provider value={{
      createTransaction,
      deleteTransaction,
    }} >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
