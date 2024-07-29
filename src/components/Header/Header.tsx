import "./Header";
import {
  HeaderContainer,
  Paragraph,
  StyledButton,
  Title,
} from "./Header.styles";
import { AiOutlineMoon } from "react-icons/ai";
import { useDarkMode } from "../../context/darkModeContext";

interface HeaderProps {
  title: string;
}

export function Header({ title }: Readonly<HeaderProps>) {
  const { darkMode, toggleTheme } = useDarkMode();

  return (
    <HeaderContainer $darkmode={darkMode}>
      <Title>{title}</Title>
      <StyledButton onClick={() => toggleTheme()} $darkmode={darkMode}>
        <AiOutlineMoon />
        <Paragraph>Dark Mode</Paragraph>
      </StyledButton>
    </HeaderContainer>
  );
}
