import { useContext } from "react";
import "./Header";
import { HeaderContainer } from "./Header.styles";
import { AiOutlineMoon } from "react-icons/ai";
import { DarkModeContext } from "../../context/darkModeContext";

type HeaderProps = {
  title: string;
};

export function Header({ title }: Readonly<HeaderProps>) {
  const { darkModeContext } = useContext(DarkModeContext);

  return (
    <HeaderContainer $darkmode={darkModeContext.darkMode}>
      <h2>{title}</h2>
      <button onClick={() => darkModeContext.setDarkMode(!darkModeContext.darkMode)}>
        <AiOutlineMoon />
        <p>Dark Mode</p>
      </button>
    </HeaderContainer>
  );
}
