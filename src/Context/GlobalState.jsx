import React, { createContext, useState } from 'react';

// Initial state
const initialState = {
  transactions: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialState.transactions);

  // Actions
  function deleteTransaction(id) {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  return (
    <GlobalContext.Provider value={{
      transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
