import styled from "styled-components";

export const CountryDetailsContainer = styled.div<{ $darkmode: boolean }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100vh;
  padding: var(--default-padding-desktop);
  background-color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-bg)" : "var(--light-mode-bg)"};
`;

export const CountryDetailsContent = styled.div<{ $darkmode: boolean }>`
  align-items: center;
  color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-input)"};
  display: flex;
  min-height: 50vh;
  justify-content: space-between;
  width: 100%;
`;

export const CountryImageContainer = styled.div`
  max-width: 450px;
  min-width: 40%;
  max-height: 450px;
  min-height: 40%;
`;

export const CountryImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const CountryInfoContainer = styled.div<{ $darkmode: boolean }>`
  color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  max-width: 40%;
  min-width: 40%;
`;

export const CountryInfoDetails = styled.div`
  display: flex;
  gap: 5rem;
`;

export const DetailBlock = styled.div`
  line-height: 1.875rem;
`;

export const Paragraph = styled.p`
  font-family: var(--default-font);
  font-weight: 400;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const BorderCountriesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const NoBordersMessage = styled.h4`
  font-weight: 400;
`;

export const NotFoundContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NotFoundMessage = styled.h2<{ $darkmode: boolean }>`
  color: ${({ $darkmode }) =>
    $darkmode ? "var(--dark-mode-text)" : "var(--light-mode-text)"};
`;
