import defultVirusIcon from "../assets/icons/covid-defult.svg";
import redVirusIcon from "../assets/icons/covid-red.svg";
import greenVirusIcon from "../assets/icons/covid-green.svg";
import blueVirusIcon from "../assets/icons/covid-blue.svg";
import orangeVirusIcon from "../assets/icons/covid-orange.svg";
import redarkVirusIcon from "../assets/icons/covid-redark.svg";

export const getStatsConfig = (countryData) => {
  return [
    {
      title: "Total Cases",
      value: countryData.cases,
      color: "blue",
      icon: blueVirusIcon,
    },

    {
      title: "Total Deaths",
      value: countryData.deaths,
      color: "red",
      icon: redVirusIcon,
    },

    {
      title: "Total Recovered",
      value: countryData.recovered,
      color: "green",
      icon: greenVirusIcon,
    },

    {
      title: "Total Active",
      value: countryData.active,
      color: "blue",
      icon: defultVirusIcon,
    },

    {
      title: "New Cases",
      value: countryData.todayCases,
      color: "orange",
      icon: orangeVirusIcon,
    },

    {
      title: "New Deaths",
      value: countryData.todayDeaths,
      color: "dark-red",
      icon: redarkVirusIcon,
    },
  ];
};