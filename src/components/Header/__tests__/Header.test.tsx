import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { act } from "react";

const MOCKED_TITLE = "Teste";

describe("Header component", () => {
  beforeEach(async () => {
    await act(() => {
      render(<Header title={MOCKED_TITLE} />);
    });
  });
  it("deve renderizar o componente Header", () => {
    const header = screen.getByRole("banner");

    expect(header).toHaveTextContent(MOCKED_TITLE);
    expect(header).toBeInTheDocument();
  });

  it("deve alterar o background quando o botão Dark Mode for acionado", async () => {
    const header = screen.getByRole("banner");

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(header).toHaveStyle('background-color: var(--dark-mode-elements)');
  });
});
