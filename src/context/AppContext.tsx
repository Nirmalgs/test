"use client";

import i18n from "@/i18n";
import Script from "next/script";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { I18nextProvider } from "react-i18next";

interface AppContextProps {

}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  return (
    <AppContext.Provider value={{ }}>
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    </AppContext.Provider>
  );
};

export const useAPPContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
