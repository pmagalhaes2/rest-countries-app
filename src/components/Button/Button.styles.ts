import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    border: none;
    box-shadow: var(--button-box-shadow);
    color: var(--light-mode-text);
    display: flex;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    justify-content: space-around;
    padding: 0.5rem 2rem;
    text-transform: capitalize;
  }

  &.MuiButtonBase-root:hover {
    background-color: transparent;
    border: none;
  }
`;
