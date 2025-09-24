"use client";
import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export function GlobalStateProvider({ children }) {
  const [selectedLang, setSelectedLang] = useState("EN");

  return (
    <GlobalStateContext.Provider value={{ selectedLang, setSelectedLang }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  return useContext(GlobalStateContext);
}