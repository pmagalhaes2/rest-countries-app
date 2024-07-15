import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--white);
  display: flex;
  width: 100%;
  padding: 1rem 4rem;
  justify-content: space-between;
  box-shadow: var(--box-shadow);
  position: sticky;
  top: 0;
  z-index: 2;

  h2 {
    color: var(--light-mode-text);
    font-weight: 800;
  }

  button {
    align-items: center;
    background-color: transparent;
    border: none;
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
