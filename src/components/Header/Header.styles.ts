import styled from "styled-components";

export const HeaderContainer = styled.header<{ $darkmode: boolean }>`
  background-color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-elements)" : "var(--light-mode-elements)"};
  color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
  display: flex;
  width: 100%;
  padding: 1.25rem 4rem;
  justify-content: space-between;
  box-shadow: var(--box-shadow);
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const StyledButton = styled.button<{ $darkmode: boolean }>`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
  cursor: pointer;
  display: flex;
  gap: 0.3125rem;
`;

export const Paragraph = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;
