import "./Header";
import { HeaderContainer } from "./Header.styles";
import { AiOutlineMoon } from "react-icons/ai";
import { useDarkMode } from "../../context/darkModeContext";

type HeaderProps = {
  title: string;
};

export function Header({ title }: Readonly<HeaderProps>) {
  const { darkMode, toggleTheme } = useDarkMode();

  return (
    <HeaderContainer $darkmode={darkMode}>
      <h2>{title}</h2>
      <button onClick={() => toggleTheme()}>
        <AiOutlineMoon />
        <p>Dark Mode</p>
      </button>
    </HeaderContainer>
  );
}
