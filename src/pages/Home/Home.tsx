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
import { ICountryDetails } from "../../interfaces/Country";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledCard } from "../../styles/Card.styles";
import { useNavigate } from "react-router-dom";
import {
  CardsContainer,
  HomeContainer,
  InputsContainer,
  NotFoundContainer,
  NotFoundMessage,
} from "./Home.styles";
import { StyledMenuItem, StyledSelect } from "../../styles/Select.styles";
import { AxiosError } from "axios";
import { useDarkMode } from "../../context/darkModeContext";
import { SelectChangeEvent } from "@mui/material/Select";

export const Home = () => {
  const [countries, setCountries] = useState<ICountryDetails[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filtered, setFiltered] = useState<ICountryDetails[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");

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
          data-testid="region-select"
          $darkmode={darkMode}
          value={selectedRegion}
          onChange={(e: SelectChangeEvent<any>) =>
            setSelectedRegion(e.target.value)
          }
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <StyledMenuItem $darkmode={darkMode} value="">
            Filter by Region
          </StyledMenuItem>
          {regions.map((region) => (
            <StyledMenuItem $darkmode={darkMode} value={region} key={region}>
              {region}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </InputsContainer>
      <CardsContainer $darkmode={darkMode}>
        {filtered.length ? (
          filtered.map((country) => (
            <StyledCard
              data-testid="country-card"
              $darkmode={darkMode}
              key={country.name.common}
              onClick={() => handleCardClick(country)}
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
          <NotFoundContainer>
            <NotFoundMessage $darkmode={darkMode}>
              {!countries.length
                ? "Failed to fetch countries"
                : "Country not found :("}
            </NotFoundMessage>
          </NotFoundContainer>
        )}
      </CardsContainer>
    </HomeContainer>
  );
};
