import React, { createContext, ReactNode, useMemo, useState } from "react";

interface darkModeContextType {
  darkModeContext: {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

interface darkModeProviderType {
  children: ReactNode;
}

export const DarkModeContext = createContext<darkModeContextType>({
  darkModeContext: {
    darkMode: false,
    setDarkMode: () => {},
  },
});

export const DarkModeContextProvider = ({ children }: darkModeProviderType) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const darkModeContext = useMemo(
    () => ({
      darkMode,
      setDarkMode,
    }),
    [darkMode, setDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ darkModeContext }}>
      {children}
    </DarkModeContext.Provider>
  );
};
