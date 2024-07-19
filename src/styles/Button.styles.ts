import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)<{ $darkmode: boolean }>`
  &.MuiButtonBase-root {
    background-color: ${({ $darkmode }) =>
      $darkmode ? "var(--dark-mode-elements)" : "var(--light-mode-elements)"};
    border: none;
    box-shadow: var(--box-shadow);
    color: ${({ $darkmode }) =>
      $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
    display: flex;
    font-family: var(--default-font);
    font-size: 1rem;
    font-weight: 600;
    justify-content: space-around;
    min-width: max-content !important;
    padding: 0.5rem 2rem;
    text-transform: capitalize;
  }

  &.MuiButtonBase-root:hover {
    background-color: transparent;
    border: none;
  }
`;
