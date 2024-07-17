import { useLocation, useNavigate } from "react-router-dom";
import {
  CountryDetailsContainer,
  CountryDetailsContent,
} from "./CountryDetails.styles";
import { BsArrowLeft } from "react-icons/bs";
import { StyledButton } from "../../components/Button/Button.styles";
import { useEffect, useState } from "react";
import { countriesService } from "../../services/countries/CountriesService";
import { ICountryDetails } from "../../services/types/Country";

export const CountryDetails = () => {
  const { state } = useLocation();
  const {
    img_url,
    img_description,
    name,
    native_name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = state;
  const [bordersInfos, setBordersInfos] = useState<ICountryDetails[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    borders && getBorders(borders);
  }, [borders]);

  const getBorders = async (codes: string[]) => {
    await countriesService
      .getBordersByCode(codes)
      .then((response: any) => {
        setBordersInfos(response.data);
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <CountryDetailsContainer>
      <StyledButton
        variant="outlined"
        startIcon={<BsArrowLeft />}
        onClick={() => navigate("/countries")}
      >
        Back
      </StyledButton>
      <CountryDetailsContent>
        <div className="image-container">
          <img src={img_url} alt={img_description} />
        </div>
        <div className="content-container">
          <h1>{name}</h1>
          <div className="content-infos">
            <div>
              <p>
                <span>Native Name:</span> {native_name}
              </p>
              <p>
                <span>Population:</span> {population}
              </p>
              <p>
                <span>Region:</span> {region}
              </p>
              <p>
                <span>Sub Region:</span> {subregion}
              </p>
              <p>
                <span>Capital:</span> {capital}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain:</span> {tld}
              </p>
              <p>
                <span>Currencies:</span> {currencies}
              </p>
              <p>
                <span>Languages: </span>
                {languages}
              </p>
            </div>
          </div>

          {bordersInfos.length > 0 && (
            <div className="borders-container">
              <p>
                <span>Border Countries: </span>
              </p>
              {bordersInfos.map((border) => (
                <StyledButton
                  key={border.name.common}
                  onClick={() =>
                    navigate(
                      `/countries/name/${border.name.common.toLowerCase()}`,
                      {
                        state: {
                          img_url: border.flags.svg,
                          img_description: border.flags.alt,
                          name: border.name.common,
                          native_name: Object.values(border.name.nativeName)[0]
                            .common,
                          population: border.population,
                          region: border.region,
                          capital: border.capital,
                          subregion: border.subregion,
                          tld: border.tld,
                          currencies: Object.values(border.currencies)[0].name,
                          languages: Object.values(border.languages).join(", "),
                          borders: border.borders,
                        },
                      }
                    )
                  }
                >
                  {border.name.common}
                </StyledButton>
              ))}
            </div>
          )}
        </div>
      </CountryDetailsContent>
    </CountryDetailsContainer>
  );
};
