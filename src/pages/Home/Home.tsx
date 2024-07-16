import {
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { countriesService } from "../../services/countries/CountriesService";
import { Country, CountryDetails } from "../../services/types/Country";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledCard } from "../../components/Card/Card.styles";
import { useNavigate } from "react-router-dom";
import { CardsContainer, HomeContainer, InputsContainer } from "./Home.styles";
import { StyledSelect } from "../../components/Select/Select.styles";

export const Home = () => {
  const [countries, setCountries] = useState<(Country | CountryDetails)[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<(Country | CountryDetails)[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    await countriesService
      .getCountries()
      .then((response: any) => {
        setCountries(response.data);
      })
      .catch((err: any) => console.log(err));
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

  const handleCardClick = (country: CountryDetails) => {
    const countryName = country.name.common.toLowerCase();
    navigate(`/countries/name/${countryName}`, {
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
      },
    });
  };

  return (
    <HomeContainer>
      <InputsContainer>
        <OutlinedInput
          id="outlined-adornment-country"
          placeholder="Search for a country..."
          onChange={(e) => setSearch(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <IconButton
              // onClick={() => console.log("Botão pesquisa clicado!")}
              >
                <AiOutlineSearch />
              </IconButton>
            </InputAdornment>
          }
        />
        <StyledSelect
          value={selectedRegion}
          onChange={(e: any) => setSelectedRegion(e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Filter by Region</em>
          </MenuItem>
          {regions.map((region) => (
            <MenuItem value={region} key={region}>
              {region}
            </MenuItem>
          ))}
        </StyledSelect>
      </InputsContainer>
      <CardsContainer>
        {filtered.map((country) => (
          <StyledCard
            key={country.name.common}
            onClick={() => handleCardClick(country as CountryDetails)}
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
        ))}
      </CardsContainer>
    </HomeContainer>
  );
};
