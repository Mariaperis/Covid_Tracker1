import { useEffect, useState } from "react";
import { getGlobalData } from "../api/covidApi";

function useCovidGlobal() {

  const [covidData, setCovidData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchGlobalData = async () => {

      try {

        const data = await getGlobalData();

        setCovidData(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchGlobalData();

  }, []);

  return {
    covidData,
    loading,
  };
}

export default useCovidGlobal;