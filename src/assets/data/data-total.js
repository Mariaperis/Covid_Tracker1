import blueVirus from "../icons/covid-blue.svg";
import redVirus from "../icons/covid-red.svg";
import greenVirus from "../icons/covid-green.svg";
import lightBlueVirus from "../icons/covid-defult.svg";
import orangeVirus from "../icons/covid-orange.svg";
import pinkVirus from "../icons/covid-redark.svg";

const dataTotal = [
  {
    title: "Total Cases",
    number: "1000000",
    color: "blue",
    icon: blueVirus,
  },
  {
    title: "Total Deaths",
    number: "50000",
    color: "red",
    icon: redVirus,
  },
  {
    title: "Total Recovered",
    number: "800000",
    color: "green",
    icon: greenVirus,
  },
  {
    title: "Total Active",
    number: "800000",
    color: "lightBlue",
    icon: lightBlueVirus,
  },
  {
    title: "New Cases",
    number: "0",
    color: "orange",
    icon: orangeVirus,
  },
  {
    title: "New Deaths",
    number: "0",
    color: "darkRed",
    icon: pinkVirus,
  },
];

export default dataTotal;