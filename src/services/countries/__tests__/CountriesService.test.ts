import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  countriesService,
} from "../CountriesService";
import { MOCK_COUNTRIES } from "../mocks/MockCountries";
import { MOCK_BORDERS } from "../mocks/MockBorders";
import { MOCK_COUNTRY_DETAILS } from "../mocks/MockCountryDetails";

const mock = new MockAdapter(axios);

describe("Countries Service", () => {
  it("deve retornar as informações dos países", async () => {
    mock.onGet("/all").reply(200, MOCK_COUNTRIES);

    const countries = await countriesService.getCountries();

    expect(countries.data.length).toBeGreaterThan(0);
  });

  it("deve retornar as informações dos países vizinhos de acordo com os códigos recebidos", async () => {
    mock.onGet("/alpha?codes=CAN,MEX").reply(200, {
      MOCK_BORDERS,
    });

    const borders = await countriesService.getBordersByCode(["CAN", "MEX"]);

    expect(borders.data.length).toBe(2);
  });

  it("deve retornar a informação do país de acordo com o nome recebido", async () => {
    mock.onGet(`/name/Brazil`).reply(200, MOCK_COUNTRY_DETAILS);

    const country = await countriesService.getCountryByName("Brazil");

    expect(country.data.length).toBe(1);
  });
});
