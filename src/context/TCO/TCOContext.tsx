"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

interface TCOContextProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const TCOContext = createContext<TCOContextProps | undefined>(undefined);

export const TCOProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<any>({});
  const [step, setStep] = useState(1);

  return (
    <TCOContext.Provider value={{ data, setData, step, setStep }}>
      {children}
    </TCOContext.Provider>
  );
};

export const useTCOContext = () => {
  const context = useContext(TCOContext);
  if (!context) {
    throw new Error("useTCOContext must be used within a TCOProvider");
  }
  return context;
};
