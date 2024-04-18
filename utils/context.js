// context.js
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState([]);
  const [connectWallet,setConnectWallet] = useState([])

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable,connectWallet,setConnectWallet }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
