import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

const GlobalProvider = ({ children }) => {
  const initialState = {
    user: "",
    password: "",
    token: "",
    tokenRefresh: "",
    token_level: "",
    login: false,
    loginTela: false,
    valide: "",
  };
  const [global, setGlobal] = useLocalStorage("globalStore", initialState);

  const saveGlobal = (todo) => {
    setGlobal({ ...global, ...todo });
  };
  const setLogout = () => {
    setGlobal(initialState);
  };
  const setLogoutTela = (todo = false) => {
    setGlobal({ ...global, loginTela: todo });
  };
  return (
    <GlobalContext.Provider
      value={{
        global,
        saveGlobal,
        setLogout,
        setLogoutTela,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
