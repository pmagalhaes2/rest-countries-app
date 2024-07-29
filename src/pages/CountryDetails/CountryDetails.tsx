import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  BorderCountriesContainer,
  CountryDetailsContainer,
  CountryDetailsContent,
  CountryImage,
  CountryImageContainer,
  CountryInfoContainer,
  CountryInfoDetails,
  DetailBlock,
  NoBordersMessage,
  NotFoundContainer,
  NotFoundMessage,
  Paragraph,
  Span,
} from "./CountryDetails.styles";
import { BsArrowLeft } from "react-icons/bs";
import { StyledButton } from "../../styles/Button.styles";
import { useCallback, useEffect, useState } from "react";
import { countriesService } from "../../services/countries/CountriesService";
import { ICountryDetails } from "../../interfaces/Country";
import { AxiosError } from "axios";
import { useDarkMode } from "../../context/darkModeContext";

export const CountryDetails = () => {
  const [isStateAvailable, setIsStateAvailable] = useState<boolean>(false);
  const { state } = useLocation();
  const { name: nameUrl } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const [countryDetails, setCountryDetails] = useState<ICountryDetails>();
  const [bordersInfos, setBordersInfos] = useState<ICountryDetails[]>([]);

  const [bordersMessage, setBordersMessage] = useState<string>("");

  const { darkMode } = useDarkMode();

  useEffect(() => {
    fetchCountryDetails();
  }, [nameUrl, state]);

  const fetchCountryDetails = useCallback(async () => {
    if (state && state.name === nameUrl) {
      setIsStateAvailable(true);
      setCountryDetails(state);
      if (state.borders) {
        await getBorders(state.borders);
      } else {
        setBordersMessage("No borders");
      }
    } else {
      setIsStateAvailable(false);
      await getCountry(nameUrl as string);
    }
  }, [nameUrl, state]);

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

  const getCountry = async (name: string) => {
    await countriesService
      .getCountryByName(name)
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
            <CountryImageContainer>
              <CountryImage
                src={
                  isStateAvailable ? state.img_url : countryDetails?.flags.svg
                }
                alt={
                  isStateAvailable
                    ? state.img_description
                    : countryDetails?.flags.alt
                }
              />
            </CountryImageContainer>
            <CountryInfoContainer $darkmode={darkMode}>
              <h1>
                {isStateAvailable ? state.name : countryDetails?.name.common}
              </h1>
              <CountryInfoDetails>
                <DetailBlock>
                  <Paragraph>
                    <Span>Native Name:</Span>{" "}
                    {isStateAvailable
                      ? state.native_name
                      : countryDetails?.name.nativeName[
                          Object.keys(countryDetails?.name.nativeName || {})[0]
                        ].common}
                  </Paragraph>
                  <Paragraph>
                    <Span>Population:</Span>{" "}
                    {isStateAvailable
                      ? state.population
                      : countryDetails?.population}
                  </Paragraph>
                  <Paragraph>
                    <Span>Region:</Span>{" "}
                    {isStateAvailable ? state.region : countryDetails?.region}
                  </Paragraph>
                  <Paragraph>
                    <Span>Sub Region:</Span>{" "}
                    {isStateAvailable
                      ? state.subregion
                      : countryDetails?.subregion}
                  </Paragraph>
                  <Paragraph>
                    <Span>Capital:</Span>{" "}
                    {isStateAvailable ? state.capital : countryDetails?.capital}
                  </Paragraph>
                </DetailBlock>
                <DetailBlock>
                  <Paragraph>
                    <Span>Top Level Domain:</Span>{" "}
                    {isStateAvailable ? state.tld : countryDetails?.tld}
                  </Paragraph>
                  <Paragraph>
                    <Span>Currencies:</Span>{" "}
                    {isStateAvailable
                      ? state.currencies
                      : Object.values(countryDetails?.currencies || {})
                          .map((currency) => currency.name)
                          .join(", ")}
                  </Paragraph>
                  <Paragraph>
                    <Span>Languages: </Span>
                    {isStateAvailable
                      ? state.languages
                      : Object.values(countryDetails?.languages || {}).join(
                          ", "
                        )}
                  </Paragraph>
                </DetailBlock>
              </CountryInfoDetails>

              <BorderCountriesContainer>
                <Paragraph>
                  <Span>Border Countries: </Span>
                </Paragraph>
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
                  <NoBordersMessage>{bordersMessage}</NoBordersMessage>
                )}
              </BorderCountriesContainer>
            </CountryInfoContainer>
          </>
        ) : (
          <NotFoundContainer>
            <NotFoundMessage $darkmode={darkMode}>
              Failed to fetch country
            </NotFoundMessage>
          </NotFoundContainer>
        )}
      </CountryDetailsContent>
    </CountryDetailsContainer>
  );
};
