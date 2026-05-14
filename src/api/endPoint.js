export const getCountries = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/countries");
  return res.json();
};

export const getHistorical = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/historical?lastdays=all");
  return res.json();
};

