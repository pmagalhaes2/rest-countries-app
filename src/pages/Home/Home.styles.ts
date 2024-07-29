import styled from "styled-components";

export const HomeContainer = styled.div<{ $darkmode: boolean }>`
  align-items: center;
  background-color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-bg)" : "var(--light-mode-bg)"};
  display: flex;
  flex-direction: column;
  gap: 4rem;
  min-height: 100vh;
  padding: var(--default-padding-desktop);

  & .MuiInputBase-root {
    box-shadow: var(--box-shadow);
    background: ${({ $darkmode }) =>
      $darkmode ? "var(--dark-mode-elements)" : "var(--light-mode-elements)"};
    color: ${({ $darkmode }) =>
      $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-input)"};
    min-width: 12.5rem;
    max-width: 100%;

    svg {
      color: ${({ $darkmode }) =>
        $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
    }
  }

  & .MuiInputBase-input {
    border: none;
    color: ${({ $darkmode }) =>
      $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-input)"};
    font-size: 14px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const InputsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardsContainer = styled.div<{ $darkmode: boolean }>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: space-between;
  min-height: 50vh;
`;

export const NotFoundContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NotFoundMessage = styled.h2<{ $darkmode: boolean }>`
  color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
`;
