import { ReactNode } from "react";

export interface IDarkModeContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
}

export interface IDarkModeProvider {
  children: ReactNode;
}
