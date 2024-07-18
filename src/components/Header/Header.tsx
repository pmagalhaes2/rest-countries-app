import { useContext } from "react";
import "./Header";
import { HeaderContainer } from "./Header.styles";
import { AiOutlineMoon } from "react-icons/ai";
import { DarkModeContext } from "../../context/darkModeContext";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <HeaderContainer darkmode={darkMode}>
      <h2>{title}</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        <AiOutlineMoon />
        <p>Dark Mode</p>
      </button>
    </HeaderContainer>
  );
}
