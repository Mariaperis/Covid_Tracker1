import { ConteinerTotal }  from "../../components/countryWise/conteinerTotal/ConteinerTotal";
import { ConteinerWise } from "../../components/countryWise/conteinerWise/ConteinerWise";
import "./countryWise.css";

export const CountryWise = () => {
  return (
    <div className="countryWise-layout">
      <div className="country-panel">
        <h1 className="countryWise-title">Covid-19 Country Wise - Tabs</h1>
        <div>
          <ConteinerWise />
        </div>
        <div>
          <ConteinerTotal />
        </div>
      </div>
      </div>

  );
};
