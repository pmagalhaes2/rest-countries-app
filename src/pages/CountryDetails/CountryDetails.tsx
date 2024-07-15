import { useParams } from "react-router-dom";

export const CountryDetails = () => {
  const { name } = useParams();
  return <h1>{name}</h1>;
};
