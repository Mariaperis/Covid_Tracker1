const BASE_URL = "https://disease.sh/v3/covid-19";

export const getGlobalData = async () => {

  const response = await fetch(
    `${BASE_URL}/all`
  );

  return response.json();
};

export const getCountriesData = async () => {

  const response = await fetch(
    `${BASE_URL}/countries`
  );

  return response.json();
};

export const getCountries = async () => {

  const response = await fetch(
    `${BASE_URL}/countriesAll`
  );
  return response.json();
};
