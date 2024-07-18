import styled from "styled-components";

interface HeaderProps {
  darkmode: boolean;
}
export const HeaderContainer = styled.header<HeaderProps>`
  background-color: ${({ darkmode }) =>
    darkmode ? "var(--dark-mode-elements)" : "var(--light-mode-elements)"};
  color: ${({ darkmode }) =>
    darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
  display: flex;
  width: 100%;
  padding: 1.25rem 4rem;
  justify-content: space-between;
  box-shadow: var(--box-shadow);
  position: sticky;
  top: 0;
  z-index: 2;

  h2 {
    font-weight: 800;
  }

  button {
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${({ darkmode }) =>
      darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
    cursor: pointer;
    display: flex;
    gap: 0.3125rem;

    svg {
      width: 1.25rem;
    }

    p {
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;
