import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

const MOCKED_TITLE = "Teste";

describe("Header component", () => {
  it("deve renderizar o componente Header", () => {
    render(<Header title={MOCKED_TITLE} />);

    const header = screen.getByRole("banner");
    
    expect(header).toHaveTextContent(MOCKED_TITLE)
    expect(header).toBeInTheDocument();
  });
});
