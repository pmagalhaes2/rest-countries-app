import { Card } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  box-shadow: var(--box-shadow) !important;
  color: var(--light-mode-text);
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

  & .MuiTypography-h6 {
    font-weight: 800;
  }

  & .MuiTypography-body2 {
    color: var(--light-mode-text);
    > span {
      font-weight: 800;
    }
  }
`;
