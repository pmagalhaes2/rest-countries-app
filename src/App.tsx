import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import { Home } from "./pages/Home/Home";
import { CountryDetails } from "./pages/CountryDetails/CountryDetails";
import { Header } from "./components/Header/Header";
import { DarkModeContextProvider } from "./context/darkModeContext";

function App() {
  return (
    <DarkModeContextProvider>
      <BrowserRouter>
        <Header title={"Where in the world?"} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/countries" Component={Home} />
          <Route path="/countries/name/:name" Component={CountryDetails} />
        </Routes>
      </BrowserRouter>
    </DarkModeContextProvider>
  );
}

export default App;
