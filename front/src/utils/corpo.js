import React, { useState, createContext } from "react";
import * as Pages from "../views/pages";
export const CorpoContext = createContext();

const CorpoProvider = ({ children }) => {
  const initialState = {
    component: <Pages.Login />,
  };
  const [corpo, setCorpo] = useState(initialState);

  const saveCorpo = (todo) => {
    setCorpo({ ...corpo, ...todo });
  };
  return (
    <CorpoContext.Provider value={{ corpo, saveCorpo }}>
      {children}
    </CorpoContext.Provider>
  );
};

export default CorpoProvider;
