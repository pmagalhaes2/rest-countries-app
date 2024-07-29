import { ICountryDetailsResponse } from "../../../interfaces/ResponseData";

export const MOCK_COUNTRY_DETAILS: ICountryDetailsResponse = {
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
      tld: [".br"],
      cioc: "BRA",
      currencies: {
        BRL: {
          name: "Brazilian real",
        },
      },
      capital: ["Brasília"],
      region: "Americas",
      subregion: "South America",
      languages: {
        por: "Portuguese",
      },
      borders: [
        "ARG",
        "BOL",
        "COL",
        "GUF",
        "GUY",
        "PRY",
        "PER",
        "SUR",
        "URY",
        "VEN",
      ],
      population: 212559409,
      flags: {
        svg: "https://flagcdn.com/br.svg",
        alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
      },
    },
  ],
};