import { fireEvent, render, screen } from "@testing-library/react";
import { CountryDetails } from "../CountryDetails";
import { countriesService } from "../../../services/countries/CountriesService";
import { act } from "react";
import { MOCK_BORDERS } from "../../../services/countries/mocks/MockBorders";
import { MOCK_COUNTRY_DETAILS } from "../../../services/countries/mocks/MockCountryDetails";
import { MOCK_COUNTRY_DETAILS_WITHOUT_BORDERS } from "../mocks/MockCountryDetailsWithoutBorders";

const MOCK_NAVIGATE = jest.fn();
let MOCK_NAME_URL = "United States";
let MOCK_STATE_COUNTRY: { name: string; borders?: string[] } = {
  name: "United States",
  borders: ["CAN", "USA"],
};

jest.mock("react-router-dom", () => ({
  useNavigate: () => MOCK_NAVIGATE,
  useLocation: jest.fn(() => {
    return {
      state: MOCK_STATE_COUNTRY,
    };
  }),
  useParams: jest.fn(() => {
    return {
      name: MOCK_NAME_URL,
    };
  }),
}));

const renderComponent = async () => {
  await act(async () => {
    render(<CountryDetails />);
  });
};

describe("Country Details Page", () => {
  it("deve renderizar o botão de voltar na página de detalhes ", async () => {
    await renderComponent();
    const backButton = screen.getByRole("button", { name: "Back" });

    expect(backButton).toBeInTheDocument();
  });

  it("deve chamar a função de navegação ao clicar no botão de voltar", async () => {
    await renderComponent();
    const backButton = screen.getByRole("button", { name: "Back" });
    expect(backButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(backButton);
    });

    expect(MOCK_NAVIGATE).toHaveBeenCalled();
  });

  it("deve chamar a função getBorders e renderizar os países vizinhos", async () => {
    jest
      .spyOn(countriesService, "getBordersByCode")
      .mockResolvedValue(MOCK_BORDERS);

    await renderComponent();

    expect(countriesService.getBordersByCode).toHaveBeenCalled();
  });

  it("deve renderizar mensagem de erro caso falhe a requisição da função getBorders", async () => {
    jest.spyOn(countriesService, "getBordersByCode").mockRejectedValue("Error");

    await renderComponent();

    const borderMessage = screen.getByText(/Failed to fetch borders/);
    expect(borderMessage).toBeInTheDocument();
  });

  it("deve chamar a função getCountryByName caso receba um nameUrl diferente do name do state ao renderizar a página", async () => {
    MOCK_NAME_URL = "Brazil";

    jest
      .spyOn(countriesService, "getCountryByName")
      .mockResolvedValue(MOCK_COUNTRY_DETAILS);

    await renderComponent();

    expect(countriesService.getCountryByName).toHaveBeenCalledWith("Brazil");
  });

  it("deve renderizar 'No borders' se o país não tiver fronteiras", async () => {
    MOCK_STATE_COUNTRY = {
      name: "Brazil",
    };

    await renderComponent();

    const noBordersMessage = screen.getByText(/No borders/);
    expect(noBordersMessage).toBeInTheDocument();
  });

  it("deve renderizar 'No borders' se o país não tiver fronteiras e o nome do país for setado diretamente na URL", async () => {
    MOCK_NAME_URL = "Iceland";

    jest
      .spyOn(countriesService, "getCountryByName")
      .mockResolvedValue(MOCK_COUNTRY_DETAILS_WITHOUT_BORDERS);

    await renderComponent();

    const noBordersMessage = screen.getByText(/No borders/);
    expect(noBordersMessage).toBeInTheDocument();
  });

  it("deve renderizar mensagem de erro caso falhe a requisição da função getCountryByName", async () => {
    MOCK_NAME_URL = "Test";

    jest.spyOn(countriesService, "getCountryByName").mockRejectedValue("Error");

    await renderComponent();

    const borderMessage = screen.getByText(/Failed to fetch country/);
    expect(borderMessage).toBeInTheDocument();
  });

  it("deve chamar o navigate caso seja clicado em um dos botões de borders", async () => {
    jest
      .spyOn(countriesService, "getCountryByName")
      .mockResolvedValue(MOCK_COUNTRY_DETAILS);

    jest
      .spyOn(countriesService, "getBordersByCode")
      .mockResolvedValue(MOCK_BORDERS);

    await renderComponent();

    const borderButtons = screen.getAllByTestId("border-button");

    await act(async () => {
      fireEvent.click(borderButtons[0]);
    });

    expect(MOCK_NAVIGATE).toHaveBeenCalled();
  });
});
