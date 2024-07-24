import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  CountryDetailsContainer,
  CountryDetailsContent,
} from "./CountryDetails.styles";
import { BsArrowLeft } from "react-icons/bs";
import { StyledButton } from "../../styles/Button.styles";
import { useCallback, useEffect, useState } from "react";
import { countriesService } from "../../services/countries/CountriesService";
import { ICountryDetails } from "../../@types/Country";
import { AxiosError } from "axios";
import { useDarkMode } from "../../context/darkModeContext";

export const CountryDetails = () => {
  const [isStateAvailable, setIsStateAvailable] = useState<boolean>(false);
  const { state } = useLocation();
  const { name: nameUrl } = useParams();
  const navigate = useNavigate();

  const [countryDetails, setCountryDetails] = useState<ICountryDetails>();
  const [bordersInfos, setBordersInfos] = useState<ICountryDetails[]>([]);

  const [bordersMessage, setBordersMessage] = useState("");

  const { darkMode } = useDarkMode();

  useEffect(() => {
    fetchCountryDetails();
  }, [nameUrl, state]);

  const fetchCountryDetails = useCallback(async () => {
    if (state && state.name === nameUrl) {
      setIsStateAvailable(true);
      setCountryDetails(state);
      if (state.borders) {
        getBorders(state.borders);
      } else {
        setBordersMessage("No borders");
      }
    } else {
      setIsStateAvailable(false);
      await countriesService
        .getCountryByName(nameUrl as string)
        .then((response) => {
          const country = response.data[0];
          setCountryDetails(country);
          if (country.borders) {
            getBorders(country.borders);
          } else {
            setBordersMessage("No borders");
          }
        })
        .catch((err) => console.error("Erro da aplicação: ", err));
    }
  }, []);

  const getBorders = async (codes: string[]) => {
    await countriesService
      .getBordersByCode(codes)
      .then((response) => {
        setBordersInfos(response.data);
      })
      .catch((err: AxiosError) => {
        setBordersMessage("Failed to fetch borders");
        console.error("Erro da aplicação: ", err);
      });
  };

  return (
    <CountryDetailsContainer $darkmode={darkMode}>
      <StyledButton
        $darkmode={darkMode}
        variant="outlined"
        startIcon={<BsArrowLeft />}
        onClick={() => navigate("/countries")}
      >
        Back
      </StyledButton>

      <CountryDetailsContent $darkmode={darkMode}>
        {countryDetails ? (
          <>
            <div className="image-container">
              <img
                src={
                  isStateAvailable ? state.img_url : countryDetails?.flags.svg
                }
                alt={
                  isStateAvailable
                    ? state.img_description
                    : countryDetails?.flags.alt
                }
              />
            </div>
            <div className="content-container">
              <h1>
                {isStateAvailable ? state.name : countryDetails?.name.common}
              </h1>
              <div className="content-infos">
                <div>
                  <p>
                    <span>Native Name:</span>{" "}
                    {isStateAvailable
                      ? state.native_name
                      : countryDetails?.name.nativeName[
                          Object.keys(countryDetails?.name.nativeName || {})[0]
                        ].common}
                  </p>
                  <p>
                    <span>Population:</span>{" "}
                    {isStateAvailable
                      ? state.population
                      : countryDetails?.population}
                  </p>
                  <p>
                    <span>Region:</span>{" "}
                    {isStateAvailable ? state.region : countryDetails?.region}
                  </p>
                  <p>
                    <span>Sub Region:</span>{" "}
                    {isStateAvailable
                      ? state.subregion
                      : countryDetails?.subregion}
                  </p>
                  <p>
                    <span>Capital:</span>{" "}
                    {isStateAvailable ? state.capital : countryDetails?.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Top Level Domain:</span>{" "}
                    {isStateAvailable ? state.tld : countryDetails?.tld}
                  </p>
                  <p>
                    <span>Currencies:</span>{" "}
                    {isStateAvailable
                      ? state.currencies
                      : Object.values(countryDetails?.currencies || {})
                          .map((currency) => currency.name)
                          .join(", ")}
                  </p>
                  <p>
                    <span>Languages: </span>
                    {isStateAvailable
                      ? state.languages
                      : Object.values(countryDetails?.languages || {}).join(
                          ", "
                        )}
                  </p>
                </div>
              </div>

              <div className="borders-container">
                <p>
                  <span>Border Countries: </span>
                </p>
                {bordersInfos.length > 0 ? (
                  bordersInfos.map((border) => (
                    <StyledButton
                      data-testid="border-button"
                      $darkmode={darkMode}
                      key={border.name.common}
                      onClick={() =>
                        navigate(`/countries/name/${border.name.common}`, {
                          state: {
                            img_url: border.flags.svg,
                            img_description: border.flags.alt,
                            name: border.name.common,
                            native_name: Object.values(
                              border.name.nativeName
                            )[0].common,
                            population: border.population,
                            region: border.region,
                            capital: border.capital,
                            subregion: border.subregion,
                            tld: border.tld,
                            currencies: Object.values(border.currencies)[0]
                              .name,
                            languages: Object.values(border.languages).join(
                              ", "
                            ),
                            borders: border.borders,
                          },
                        })
                      }
                    >
                      {border.name.common}
                    </StyledButton>
                  ))
                ) : (
                  <h4>{bordersMessage}</h4>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="not-found-container">
            <h2>Failed to fetch country</h2>
          </div>
        )}
      </CountryDetailsContent>
    </CountryDetailsContainer>
  );
};
