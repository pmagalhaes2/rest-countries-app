import styled from "styled-components";

export const CountryDetailsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: var(--default-padding-desktop);
`;

export const CountryDetailsContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .image-container {
    max-width: 40%;
  }

  .image-container img {
    width: 100%;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;

    h1 {
      font-weight: 800;
    }

    > div {
      display: flex;
      gap: 5rem;

      div {
        line-height: 1.875rem;
      }
    }

    p span {
      font-weight: 800;
    }
  }
`;
