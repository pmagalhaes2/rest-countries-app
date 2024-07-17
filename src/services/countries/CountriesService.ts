import { ApiService } from "../ApiService";
import { Country } from "../types/Country";

const apiService = new ApiService();

class CountriesService {
  getCountries(): Promise<Country[]> {
    return apiService.get({
      endpoint: `/all`,
      config: { "Content-Type": "application/json" },
    });
  }

  getBordersByCode(codes: string[]): Promise<Country[]> {
    return apiService.get({
      endpoint: `/alpha?codes=${codes}`,
      config: { "Content-Type": "application/json" },
    });
  }
}

export const countriesService = new CountriesService();