import React, { createContext, useState } from 'react';

// Create the context
export const WordContext = createContext();

// Create a provider component
export const WordProvider = ({ children }) => {
  const [word, setWord] = useState(null);

  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
};
