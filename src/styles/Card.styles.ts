import { Card } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)<{ $darkmode: boolean }>`
  background-color: ${({ $darkmode }) =>
    $darkmode
      ? "var(--dark-mode-elements) !important"
      : "var(--light-mode-elements)  !important"};
  box-shadow: var(--box-shadow) !important;
  color: ${({ $darkmode }) =>
    $darkmode
      ? "var(--dark-mode-text) !important"
      : "var(--light-mode-text) !important"};
  height: 350px;
  width: 250px;

  & .MuiCardContent-root {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem;
  }

  & .MuiIconButton-root {
    > svg {
      width: 0.5rem;
    }
  }

  & .MuiTypography-body1 {
    font-family: var(--default-font);
    font-size: 1.125rem;
    font-weight: 800;
  }

  & .MuiTypography-body2 {
    color: ${({ $darkmode }) =>
      $darkmode
        ? "var(--dark-mode-text) !important"
        : "var(--light-mode-text) !important"};
    font-family: var(--default-font);
    font-weight: 400;
    > span {
      font-weight: 700;
    }
  }
`;
