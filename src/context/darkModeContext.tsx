import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
}

interface darkModeProviderType {
  children: ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
  toggleTheme: () => {},
});

export const DarkModeContextProvider = ({ children }: darkModeProviderType) => {
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
