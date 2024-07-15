export type Countries = {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  borders: string[];
  population: number;
  flags : {
    png: string;
    alt: string;
  }
};
