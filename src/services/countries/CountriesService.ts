import { ICountryDetailsResponse, ICountryResponse } from "../../@types/ResponseData";
import { ApiService } from "../ApiService";

const apiService = new ApiService();

class CountriesService {
  getCountries(): Promise<ICountryResponse> {
    return apiService.get({
      endpoint: `/all`,
      config: { "Content-Type": "application/json" },
    });
  }

  getBordersByCode(codes: string[]): Promise<ICountryDetailsResponse> {
    return apiService.get({
      endpoint: `/alpha?codes=${codes}`,
      config: { "Content-Type": "application/json" },
    });
  }
}

export const countriesService = new CountriesService();