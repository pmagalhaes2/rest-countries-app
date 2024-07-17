import styled from "styled-components";

export const HomeContainer = styled.div`
  align-items: center;
  background-color: var(--light-mode-bg);
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100vh;
  padding: var(--default-padding-desktop);

  & .MuiInputBase-root {
    box-shadow: var(--box-shadow);
    background-color: var(--white);
  }

  & .MuiInputBase-input {
    border: none;
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

export const CardsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: space-between;

  .not-found-container {
    padding: 4rem 0;
  }
`;
