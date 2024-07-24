import styled from "styled-components";

export const CountryDetailsContainer = styled.div<{ $darkmode: boolean }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100vh;
  padding: var(--default-padding-desktop);
  background-color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-bg)" : "var(--light-mode-bg)"};
`;

export const CountryDetailsContent = styled.div<{ $darkmode: boolean }>`
  align-items: center;
  color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-input)"};
  display: flex;
  min-height: 50vh;
  justify-content: space-between;
  width: 100%;

  .image-container {
    max-width: 750px;
    min-width: 40%;
    max-height: 750px;
    min-height: 40%;
  }

  .image-container img {
    width: 100%;
    height: 100%;
  }

  .content-container {
    color: ${({ $darkmode }) =>
      $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    max-width: 40%;
    min-width: 40%;

    h1 {
      font-weight: 800;
    }

    .content-infos {
      display: flex;
      gap: 5rem;

      div {
        line-height: 1.875rem;
      }

      p {
        font-family: var(--default-font);
        font-weight: 400;
        > span {
          font-weight: 700;
        }
      }
    }

    .borders-container {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      span {
        font-weight: 700;
      }

      h4 {
        font-weight: 400;
      }
    }
  }

  .not-found-container {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;

    h2 {
      color: ${({ $darkmode }) =>
        $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
    }
  }
`;
