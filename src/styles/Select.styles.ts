import { MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export const StyledSelect = styled(Select)<{ $darkmode: boolean }>`
  & .MuiSelect-select {
    color: ${({ $darkmode }) =>
      $darkmode
        ? "var(--dark-mode-text) !important"
        : "var(--light-mode-text) !important"};
    font-size: 14px;
    font-style: normal;
  }
`;

export const StyledMenuItem = styled(MenuItem)<{ $darkmode: boolean }>`
  &.MuiMenuItem-root {
    background-color: ${({ $darkmode }) =>
      $darkmode
        ? "var(--dark-mode-elements) !important"
        : "var(--light-mode-elements) !important"};
    color: ${({ $darkmode }) =>
      $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
    font-size: 14px;

    &:hover {
      background-color: ${({ $darkmode }) =>
        $darkmode ? "var(--dark-mode-bg)" : "var(--light-mode-bg)"};
    }
`;
