import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { countriesService } from "../CountriesService";
import { MOCK_COUNTRIES } from "../mocks/MockCountries";
import { MOCK_BORDERS } from "../mocks/MockBorders";
import { MOCK_COUNTRY_DETAILS } from "../mocks/MockCountryDetails";
import { ICountry } from "../../../interfaces/Country";

const mock = new MockAdapter(axios);

describe("Countries Service", () => {
  it("deve retornar as informações dos países", async () => {
    mock.onGet("/all").reply(200, MOCK_COUNTRIES);

    const countries = await countriesService.getCountries();

    expect(countries.data.length).toBeGreaterThan(0);

    MOCK_COUNTRIES.data.forEach((mockCountry) => {
      const found = countries.data.some(
        (country: ICountry) => country.name.common === mockCountry.name.common
      );
      expect(found).toBe(true);
    });
  });

  it("deve retornar as informações dos países vizinhos de acordo com os códigos recebidos", async () => {
    mock.onGet("/alpha?codes=CAN,MEX").reply(200, {
      MOCK_BORDERS,
    });

    const borders = await countriesService.getBordersByCode(["CAN", "MEX"]);

    expect(borders.data.length).toBe(2);

    MOCK_BORDERS.data.forEach((mockBorder) => {
      const found = borders.data.some(
        (border: ICountry) => border.name.common === mockBorder.name.common
      );
      expect(found).toBe(true);
    });
  });

  it("deve retornar a informação do país de acordo com o nome recebido", async () => {
    mock.onGet(`/name/Brazil`).reply(200, MOCK_COUNTRY_DETAILS);

    const country = await countriesService.getCountryByName("Brazil");

    expect(country.data.length).toBe(1);

    MOCK_COUNTRY_DETAILS.data.forEach((mockCountryDetails) => {
      const found = country.data.every(
        (country: ICountry) =>
          country.name.common === mockCountryDetails.name.common
      );
      expect(found).toBe(true);
    });
  });
});
