import { useEffect, useState } from "react";
import "./App.css";
import { countriesService } from "./services/countries/CountriesService";
import { CountriesList } from "./services/types/Countries";

function App() {
  const [countries, setCountries] = useState<CountriesList[]>([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const response = await countriesService.getCountries();

      setCountries(response.data);
    };
    getAllCountries();
  }, []);

  return (
    <>
      {countries.map((country) => (
        <div key={country.name.common}>
          <img src={country.flags.png} alt={country.flags.alt} />
          <h3>{country.name.common}</h3>
          <p>População: {country.population}</p>
          <p>Região: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      ))}
    </>
  );
}

export default App;
