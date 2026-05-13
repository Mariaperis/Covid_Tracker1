import { useEffect, useState } from "react";

import { getCountriesData } from "../api/covidApi";

function useTopCountries() {

  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchCountries = async () => {

      try {

        const data = await getCountriesData();

        const sortedCountries = data.sort(
          (a, b) => b.cases - a.cases
        );

        const top10 = sortedCountries.slice(0, 10);

        setCountries(top10);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchCountries();

  }, []);

  return {
    countries,
    loading,
  };
}

export default useTopCountries;