import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "2323232323"
    const name="Hello"
  return (
    <AppContext.Provider value={{phone,name}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;