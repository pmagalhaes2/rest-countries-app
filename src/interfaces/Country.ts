export interface ICountry {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    svg: string;
    alt: string;
  };
}

export interface ICountryDetails extends ICountry {
  borders?: string[];
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  cioc: string;
}
