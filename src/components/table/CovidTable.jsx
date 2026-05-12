import TableRow from "./TableRow";

import { tableColumns } from "../../utils/tableColumns";

import "../../pages/tracker/table.css";

function CovidTable({ countries }) {

  return (

    <table className="covid-table">

      <thead>

        <tr>

          {tableColumns.map((column) => (

            <th key={column}>

              {column}

            </th>

          ))}

        </tr>

      </thead>

      <tbody>

        {countries.map((country) => (

          <TableRow
            key={country.country}
            country={country}
          />

        ))}

      </tbody>

    </table>
  );
}

export default CovidTable;