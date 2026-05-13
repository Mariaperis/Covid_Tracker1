import { useEffect, useState } from "react";
import { getCountriesData } from "../api/covidApi";

function useCountryWise() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState([]);

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

  useEffect(() => {

    const fetchCountries = async () => {
      try {
        const data = await getCountriesData();

        const wiseCountries = (data, nameCountries) => {
          return data.filter((item) => nameCountries.includes(item.country));
        };

        setCountries(wiseCountries);
        
      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return{
    countries,
    loading,
  };
}

export default useCountryWise;
