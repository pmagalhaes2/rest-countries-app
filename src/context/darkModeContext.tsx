import { createContext, useState } from "react";

export const DarkModeContext = createContext<any>({});

export const DarkModeContextProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
