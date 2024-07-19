import {
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { countriesService } from "../../services/countries/CountriesService";
import { ICountry, ICountryDetails } from "../../@types/Country";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledCard } from "../../styles/Card.styles";
import { useNavigate } from "react-router-dom";
import { CardsContainer, HomeContainer, InputsContainer } from "./Home.styles";
import { StyledMenuItem, StyledSelect } from "../../styles/Select.styles";
import { AxiosError } from "axios";
import { useDarkMode } from "../../context/darkModeContext";
import { SelectChangeEvent } from "@mui/material/Select";

export const Home = () => {
  const [countries, setCountries] = useState<(ICountry | ICountryDetails)[]>(
    []
  );
  const [regions, setRegions] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<(ICountry | ICountryDetails)[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const navigate = useNavigate();

  const { darkMode } = useDarkMode();

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    await countriesService
      .getCountries()
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err: AxiosError) => console.error("Erro da aplicação: ", err));
  };

  useEffect(() => {
    setRegions([...new Set(countries.map((country) => country.region))]);
  }, [countries]);

  useEffect(() => {
    const filterCountries = () => {
      let filteredCountries = countries;

      if (selectedRegion) {
        filteredCountries = filteredCountries.filter((country) =>
          country.region.includes(selectedRegion)
        );
      }

      if (search) {
        filteredCountries = filteredCountries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        );
      }

      setFiltered(filteredCountries);
    };
    filterCountries();
  }, [countries, search, selectedRegion]);

  const handleCardClick = (country: ICountryDetails) => {
    navigate(`/countries/name/${country.name.common}`, {
      state: {
        img_url: country.flags.svg,
        img_description: country.flags.alt,
        name: country.name.common,
        native_name: Object.values(country.name.nativeName)[0].common,
        population: country.population,
        region: country.region,
        capital: country.capital,
        subregion: country.subregion,
        tld: country.tld,
        currencies: Object.values(country.currencies)[0].name,
        languages: Object.values(country.languages).join(", "),
        borders: country.borders,
      },
    });
  };

  return (
    <HomeContainer $darkmode={darkMode}>
      <InputsContainer>
        <OutlinedInput
          id="outlined-adornment-country"
          placeholder="Search for a country..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <AiOutlineSearch />
              </IconButton>
            </InputAdornment>
          }
        />
        <StyledSelect
          $darkmode={darkMode}
          value={selectedRegion}
          onChange={(e: SelectChangeEvent<any>) =>
            setSelectedRegion(e.target.value)
          }
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <StyledMenuItem $darkmode={darkMode} value="">
            <em>Filter by Region</em>
          </StyledMenuItem>
          {regions.map((region) => (
            <StyledMenuItem
              $darkmode={darkMode}
              value={region}
              key={region}
            >
              {region}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </InputsContainer>
      <CardsContainer $darkmode={darkMode}>
        {filtered.length ? (
          filtered.map((country) => (
            <StyledCard
              $darkmode={darkMode}
              key={country.name.common}
              onClick={() => handleCardClick(country as ICountryDetails)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={country.flags.svg}
                  alt={country.flags.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    {country.name.common}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span>Population:</span> {country.population}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span>Region:</span> {country.region}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span>Capital:</span> {country.capital}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          ))
        ) : (
          <div className="not-found-container">
            <h2>Country not found :(</h2>
          </div>
        )}
      </CardsContainer>
    </HomeContainer>
  );
};
