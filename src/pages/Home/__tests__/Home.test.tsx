import { fireEvent, render, screen, within } from "@testing-library/react";
import { act } from "react";
import { Home } from "../Home";
import {
  countriesService,
  MOCK_COUNTRIES,
} from "../../../services/countries/CountriesService";
import { ICountryDetailsResponse } from "../../../@types/Country";

const MOCK_COUNTRIES_DETAILS: ICountryDetailsResponse = {
  data: [
    {
      name: {
        common: "Brazil",
        nativeName: {
          por: {
            common: "Brasil",
          },
        },
      },
      tld: [".br"],
      cioc: "BRA",
      currencies: {
        BRL: {
          name: "Brazilian real",
        },
      },
      capital: ["Brasília"],
      region: "Americas",
      subregion: "South America",
      languages: {
        por: "Portuguese",
      },
      borders: [
        "ARG",
        "BOL",
        "COL",
        "GUF",
        "GUY",
        "PRY",
        "PER",
        "SUR",
        "URY",
        "VEN",
      ],
      population: 212559409,
      flags: {
        svg: "https://flagcdn.com/br.svg",
        alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
      },
    },
    {
      name: {
        common: "Canada",
        nativeName: {
          eng: {
            common: "Canada",
          },
        },
      },
      tld: [".ca"],
      cioc: "CAN",
      currencies: {
        CAD: {
          name: "Canadian dollar",
        },
      },
      capital: ["Ottawa"],
      region: "Americas",
      subregion: "North America",
      languages: {
        eng: "English",
        fra: "French",
      },
      borders: ["USA"],
      population: 38005238,
      flags: {
        svg: "https://flagcdn.com/ca.svg",
        alt: "The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square.",
      },
    },
    {
      name: {
        common: "Mexico",
        nativeName: {
          spa: {
            common: "México",
          },
        },
      },
      tld: [".mx"],
      cioc: "MEX",
      currencies: {
        MXN: {
          name: "Mexican peso",
        },
      },
      capital: ["Mexico City"],
      region: "Americas",
      subregion: "North America",
      languages: {
        spa: "Spanish",
      },
      borders: ["BLZ", "GTM", "USA"],
      population: 128932753,
      flags: {
        svg: "https://flagcdn.com/mx.svg",
        alt: "The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band.",
      },
    },
  ],
};

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
