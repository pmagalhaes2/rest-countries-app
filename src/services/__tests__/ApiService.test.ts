import { ApiService } from "../ApiService";
import { MOCK_COUNTRIES } from "../countries/CountriesService";

describe("ApiService", () => {
  let apiService: ApiService;

  beforeEach(() => {
    process.env.NODE_ENV = "testing";
    apiService = new ApiService();
  });

  it("deve resolver uma promessa com o mock fornecido quando forceMocks é true", async () => {
    const result = await apiService.get({
      endpoint: "/all",
      mock: MOCK_COUNTRIES,
    });

    expect(result).toEqual(MOCK_COUNTRIES);
  });

  it("deve lançar um erro quando for fornecido um mock inválido", async () => {
    try {
      await apiService.get({ endpoint: "/all" });
    } catch (error) {
      expect(error).toEqual(new Error("PROVIDE A VALID MOCK"));
    }
  });
});
