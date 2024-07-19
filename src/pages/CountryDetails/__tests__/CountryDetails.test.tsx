import { CountryDetails } from "../CountryDetails";
import { render, screen } from "@testing-library/react";

describe("Testa o componente de detalhes do país", () => {
  it("Deve renderizar a página Details ", () => {
    render( < CountryDetails />);

    const backButton = screen.getByRole("button");

    expect(backButton).toBeInTheDocument();
  });
});
