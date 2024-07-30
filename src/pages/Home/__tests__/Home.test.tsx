import { fireEvent, render, screen, within } from "@testing-library/react";
import { act } from "react";
import { Home } from "../Home";
import { countriesService } from "../../../services/countries/CountriesService";
import { MOCK_COUNTRIES } from "../../../services/countries/mocks/MockCountries";
import { MOCK_COUNTRIES_DETAILS } from "../mocks/MockCountriesDetails";

const MOCK_NAVIGATE = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => MOCK_NAVIGATE,
}));

const renderComponent = async () => {
  await act(async () => {
    render(<Home />);
  });
};

describe("Home Page", () => {
  it("deve chamar a função getCountries quando a página Home for renderizada", async () => {
    jest
      .spyOn(countriesService, "getCountries")
      .mockResolvedValue(MOCK_COUNTRIES);

    await renderComponent();

    expect(countriesService.getCountries).toHaveBeenCalled();
  });

  it("deve renderizar mensagem de erro caso falhe a requisição do getCountries", async () => {
    jest.spyOn(countriesService, "getCountries").mockRejectedValue("Error");

    await renderComponent();

    const errorMessage = screen.getByText(/Failed to fetch countries/);
    expect(errorMessage).toBeInTheDocument();
  });

  it("deve filtrar o país digitado caso o mesmo exista na listagem de países", async () => {
    jest
      .spyOn(countriesService, "getCountries")
      .mockResolvedValue(MOCK_COUNTRIES);

    await renderComponent();

    const input = screen.getByPlaceholderText(/Search for a country../);

    await act(async () => {
      fireEvent.change(input, { target: { value: "Switzerland" } });
    });

    expect(screen.getByText("Switzerland")).toBeInTheDocument();

    expect(screen.queryByText("Grenada")).not.toBeInTheDocument();
  });

  it("deve filtrar os países de acordo com a região caso seja selecionado o filtro por região", async () => {
    jest
      .spyOn(countriesService, "getCountries")
      .mockResolvedValue(MOCK_COUNTRIES);

    await renderComponent();

    const dropdown = within(screen.getByTestId("region-select")).getByRole(
      "combobox",
      { hidden: true }
    );

    await act(async () => {
      fireEvent.mouseDown(dropdown);
    });

    const regionOption = await screen.findByRole("option", {
      name: "Americas",
    });

    await act(async () => {
      fireEvent.click(regionOption);
    });

    expect(screen.getByText("Grenada")).toBeInTheDocument();
    expect(screen.queryByText("Switzerland")).not.toBeInTheDocument();
  });

  it("deve chamar o navigate caso seja clicado em um dos cards", async () => {
    jest
      .spyOn(countriesService, "getCountries")
      .mockResolvedValue(MOCK_COUNTRIES_DETAILS);

    await renderComponent();

    const cards = screen.getAllByTestId("country-card");

    await act(async () => {
      fireEvent.click(cards[0]);
    });

    expect(MOCK_NAVIGATE).toHaveBeenCalledTimes(1);
  });
});
