import { InfoHook } from "../hooks/UseApi";

function useCountryWise() {
  const {countries, loading} = InfoHook();

  const nameCountries = [
    "USA",
    "Spain",
    "Italy",
    "India",
    "UK",
    "France",
    "Germany",
    "Turkey",
  ];

  const wiseCountries = (countries, nameCountries) => {
    return countries.filter((item) => nameCountries.includes(item.country));
  };
  const filterCountries = wiseCountries(countries, nameCountries);

  return {filterCountries, loading};
}

export default useCountryWise;
