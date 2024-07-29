import { ICountryDetailsResponse } from "../../../interfaces/ResponseData";

export const MOCK_COUNTRY_DETAILS_WITHOUT_BORDERS: ICountryDetailsResponse = {
  data: [
    {
      name: {
        common: "Iceland",
        nativeName: {
          isl: {
            common: "Ísland",
          },
        },
      },
      tld: [".is"],
      cioc: "ISL",
      currencies: {
        ISK: {
          name: "Icelandic króna",
        },
      },
      capital: ["Reykjavik"],
      region: "Europe",
      subregion: "Northern Europe",
      languages: {
        isl: "Icelandic",
      },
      population: 366425,
      flags: {
        svg: "https://flagcdn.com/is.svg",
        alt: "The flag of Iceland has a blue field with a large white-edged red cross that extends to the edges of the field. The vertical part of this cross is offset towards the hoist side.",
      },
    },
  ],
};
