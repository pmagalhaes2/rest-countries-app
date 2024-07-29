import { ICountry, ICountryDetails } from "./Country";

export interface ICountriesResponse {
  data: ICountry[];
}

export interface ICountryDetailsResponse {
  data: ICountryDetails[];
}
