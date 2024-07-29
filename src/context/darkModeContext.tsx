import { createContext, useContext, useMemo, useState } from "react";
import { IDarkModeContext, IDarkModeProvider } from "./interfaces/IDarkMode";

export const DarkModeContext = createContext<IDarkModeContext>({
  darkMode: false,
  setDarkMode: () => {},
  toggleTheme: () => {},
});

export const DarkModeContextProvider = ({ children }: IDarkModeProvider) => {
  const previousTheme = localStorage.getItem("darkmode");
  const [darkMode, setDarkMode] = useState<boolean>(
    previousTheme ? JSON.parse(previousTheme) : false
  );

  const toggleTheme = () => {
    setDarkMode(() => {
      const newTheme = !darkMode;
      localStorage.setItem("darkmode", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const value = useMemo(
    () => ({
      darkMode,
      setDarkMode,
      toggleTheme,
    }),
    [darkMode]
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
