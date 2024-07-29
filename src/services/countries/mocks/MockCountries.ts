import { ICountriesResponse } from "../../../interfaces/ResponseData";

export const MOCK_COUNTRIES: ICountriesResponse = {
  data: [
    {
      name: {
        common: "Brazil",
        nativeName: {
          por: {
            common: "Brasil",
          },
        },
      },
      capital: ["Brasília"],
      region: "Americas",
      population: 212559409,
      flags: {
        svg: "https://flagcdn.com/br.svg",
        alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
      },
    },
    {
      name: {
        common: "Grenada",
        nativeName: {
          eng: {
            common: "Grenada",
          },
        },
      },
      capital: ["St. George's"],
      region: "Americas",
      population: 112519,
      flags: {
        svg: "https://flagcdn.com/gd.svg",
        alt: "The flag of Grenada features a large central rectangular area surrounded by a red border, with three five-pointed yellow stars centered on the top and bottom borders. The central rectangle is divided diagonally into four alternating triangular areas of yellow at the top and bottom and green on the hoist and fly sides, and a five-pointed yellow star on a red circle is superimposed at its center. A symbolic nutmeg pod is situated on the green hoist-side triangle.",
      },
    },
    {
      name: {
        common: "Switzerland",
        nativeName: {
          fra: {
            common: "Suisse",
          },
          gsw: {
            common: "Schweiz",
          },
          ita: {
            common: "Svizzera",
          },
          roh: {
            common: "Svizra",
          },
        },
      },
      capital: ["Bern"],
      region: "Europe",
      population: 8654622,
      flags: {
        svg: "https://flagcdn.com/ch.svg",
        alt: "The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field.",
      },
    },
  ],
};