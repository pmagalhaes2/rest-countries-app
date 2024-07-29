import { fireEvent, render, screen } from "@testing-library/react";
import { DarkModeContextProvider } from "../darkModeContext";
import { Header } from "../../components/Header/Header";
import { act } from "react";

describe("Dark mode context", () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <DarkModeContextProvider>
          <Header title={"Test"} />
        </DarkModeContextProvider>
      );
    });
  });
  it("deve renderizar o provider com um componente filho", async () => {
    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
  });

  it("deve alterar o background quando o botão Dark Mode for acionado", async () => {
    const header = screen.getByRole("banner");

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(header).toHaveStyle("background-color: var(--dark-mode-elements)");
  });
});
