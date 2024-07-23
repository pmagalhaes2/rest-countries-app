import { ICountryDetailsResponse } from "../../@types/ResponseData";
import { ApiService } from "../ApiService";
import { ICountriesResponse } from "../../@types/Country";

export const MOCK_BORDERS = {
  data: [
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

const apiService = new ApiService();

class CountriesService {
  getCountries() {
    return apiService.get({
      endpoint: `/all`,
      mock: MOCK_COUNTRIES,
      config: { "Content-Type": "application/json" },
    });
  }

  getBordersByCode(codes: string[]) {
    return apiService.get({
      endpoint: `/alpha?codes=${codes}`,
      mock: MOCK_BORDERS,
      config: { "Content-Type": "application/json" },
    });
  }

  getCountryByName(name: string) {
    return apiService.get({
      endpoint: `/name/${name}`,
      mock: MOCK_COUNTRY_DETAILS,
      config: { "Content-Type": "application/json" },
    });
  }
}

export const countriesService = new CountriesService();
