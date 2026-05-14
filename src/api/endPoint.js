const API_URL = import.meta.env.VITE_API_URL;

export const getCountries = async () => {
  const res = await fetch(`${API_URL}/countries`);
  return res.json();
};

export const getHistorical = async () => {
  const res = await fetch(`${API_URL}/historical?lastdays=all`);
  return res.json();
};

