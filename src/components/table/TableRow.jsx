import "../../pages/tracker/table.css";

function TableRow({ country }) {

  return (

    <tr>

      <td>

        <img
          src={country.countryInfo.flag}
          alt={country.country}
          className="country-flag"
        />

      </td>

      <td>{country.country}</td>

      <td>{country.cases}</td>

      <td>{country.todayCases}</td>

      <td>{country.deaths}</td>

      <td>{country.todayDeaths}</td>

      <td>{country.recovered}</td>

      <td>{country.active}</td>

      <td>{country.critical}</td>

      <td>{country.tests}</td>

    </tr>
  );
}

export default TableRow;