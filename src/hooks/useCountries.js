import { useEffect, useState } from "react";

import { getCountriesData } from "../api/covidApi";

function useCountries() {

  const [countriesAll, setCountries] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchCountries = async () => {

      try {

        const data = await getCountriesData();

        setCountries(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    fetchCountries();

  }, []);

  return {
    countriesAll,
    loading,
  };
}

export default useCountries;