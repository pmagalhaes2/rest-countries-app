import styled from "styled-components";

export const HomeContainer = styled.div`
  align-items: flex-start;
  background-color: var(--light-mode-bg);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: var(--default-padding-desktop);

  &  .MuiInputBase-root {
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
`;
