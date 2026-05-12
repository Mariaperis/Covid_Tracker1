export const getStatsConfig = (countryData) => {

  return [
    {
      title: "Total Cases",
      value: countryData.cases,
      color: "blue",
    },
    {
      title: "Total Deaths",
      value: countryData.deaths,
      color: "red",
    },
    {
      title: "Total Recovered",
      value: countryData.recovered,
      color: "green",
    },
    {
      title: "Total Active",
      value: countryData.active,
      color: "blue",
    },
    {
      title: "New Cases",
      value: countryData.todayCases,
      color: "orange",
    },
    {
      title: "New Deaths",
      value: countryData.todayDeaths,
      color: "red",
    },
  ];
};