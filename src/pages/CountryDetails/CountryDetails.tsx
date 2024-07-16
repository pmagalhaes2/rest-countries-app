import { useLocation, useNavigate } from "react-router-dom";
import {
  CountryDetailsContainer,
  CountryDetailsContent,
} from "./CountryDetails.styles";
import { BsArrowLeft } from "react-icons/bs";
import { StyledButton } from "../../components/Button/Button.styles";

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
  } = state;

  const navigate = useNavigate();

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
          <div>
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
          <p>
            <span>Border Countries:</span>
          </p>
        </div>
      </CountryDetailsContent>
    </CountryDetailsContainer>
  );
};
