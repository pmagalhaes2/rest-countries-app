import styled from "styled-components";

export const CountryDetailsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: var(--default-padding-desktop);
`;

export const CountryDetailsContent = styled.div`
  align-items: center;
  display: flex;
  min-height: 50vh;
  justify-content: space-between;
  width: 100%;

  .image-container {
    max-width: 40%;
    min-width: 40%;
  }

  .image-container img {
    width: 100%;
  }

  .content-container {
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
    }

    .borders-container {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    p span {
      font-weight: 800;
    }
  }
`;
