import { ICountryDetailsResponse } from "../../../interfaces/ResponseData";

export const MOCK_COUNTRIES_DETAILS: ICountryDetailsResponse = {
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
    {
      name: {
        common: "Canada",
        nativeName: {
          eng: {
            common: "Canada",
          },
        },
      },
      tld: [".ca"],
      cioc: "CAN",
      currencies: {
        CAD: {
          name: "Canadian dollar",
        },
      },
      capital: ["Ottawa"],
      region: "Americas",
      subregion: "North America",
      languages: {
        eng: "English",
        fra: "French",
      },
      borders: ["USA"],
      population: 38005238,
      flags: {
        svg: "https://flagcdn.com/ca.svg",
        alt: "The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square.",
      },
    },
    {
      name: {
        common: "Mexico",
        nativeName: {
          spa: {
            common: "México",
          },
        },
      },
      tld: [".mx"],
      cioc: "MEX",
      currencies: {
        MXN: {
          name: "Mexican peso",
        },
      },
      capital: ["Mexico City"],
      region: "Americas",
      subregion: "North America",
      languages: {
        spa: "Spanish",
      },
      borders: ["BLZ", "GTM", "USA"],
      population: 128932753,
      flags: {
        svg: "https://flagcdn.com/mx.svg",
        alt: "The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band.",
      },
    },
  ],
};
