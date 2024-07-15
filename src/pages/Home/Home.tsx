import {
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { countriesService } from "../../services/countries/CountriesService";
import { Countries } from "../../services/types/Countries";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledCard } from "../../components/Card/Card.styles";
import { useNavigate } from "react-router-dom";
import { CardsContainer, HomeContainer } from "./Home.styles";

export const Home = () => {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Countries[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    await countriesService
      .getCountries()
      .then((response: any) => setCountries(response.data))
      .catch((err: any) => console.log(err));
  };

  useEffect(() => {
    setFiltered(
      countries.filter((country: Countries) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [countries, search]);

  return (
    <HomeContainer>
      <OutlinedInput
        id="outlined-adornment-country"
        placeholder="Search for a country..."
        onChange={(e) => setSearch(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <IconButton onClick={() => console.log("Botão pesquisa clicado!")}>
              <AiOutlineSearch />
            </IconButton>
          </InputAdornment>
        }
      />
      <CardsContainer>
        {filtered.map((country) => (
          <StyledCard
            key={country.name.common}
            onClick={() =>
              navigate(`/countries/name/${country.name.common.toLowerCase()}`)
            }
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={country.flags.png}
                alt={country.flags.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
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
