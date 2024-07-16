export interface Country {
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

export interface CountryDetails extends Country {
  borders: string[];
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages:  {
    [key: string] : [value: string]
  };
}
