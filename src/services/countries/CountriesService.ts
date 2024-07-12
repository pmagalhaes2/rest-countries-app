import { ApiService } from "../ApiService";
import { CountriesList } from "../types/Countries";

const apiService = new ApiService();

class CountriesService {
  getCountries(): Promise<CountriesList[]> {
    return apiService.get({
      endpoint: `/all`,
      config: { "Content-Type": "application/json" },
    });
  }
}

export const countriesService = new CountriesService();