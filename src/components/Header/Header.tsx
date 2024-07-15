import "./Header";
import { HeaderContainer } from "./Header.styles";
import { AiOutlineMoon } from "react-icons/ai";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <h2>{title}</h2>
      <button>
        <AiOutlineMoon />
        <p>Dark Mode</p>
      </button>
    </HeaderContainer>
  );
}
