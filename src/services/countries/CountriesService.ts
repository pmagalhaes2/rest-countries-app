import { ApiService } from "../ApiService";
import { MOCK_BORDERS } from "./mocks/MockBorders";
import { MOCK_COUNTRIES } from "./mocks/MockCountries";
import { MOCK_COUNTRY_DETAILS } from "./mocks/MockCountryDetails";

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
