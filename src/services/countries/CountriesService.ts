import { ApiService } from "../ApiService";
import { Countries } from "../types/Countries";

const apiService = new ApiService();

class CountriesService {
  getCountries(): Promise<Countries[]> {
    return apiService.get({
      endpoint: `/all`,
      config: { "Content-Type": "application/json" },
    });
  }
}

export const countriesService = new CountriesService();