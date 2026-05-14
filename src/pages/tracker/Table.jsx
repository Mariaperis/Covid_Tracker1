import { useState } from "react";
import { InfoHook } from "../../hooks/UseApi";
import CovidTable from "../../components/table/CovidTable";
import TableHeader from "../../components/table/TableHeader";
import TableSearch from "../../components/table/TableSearch";
import TablePagination from "../../components/table/TablePagination";
import TableSelect from "../../components/table/TableSelect";
import FloatingActions from "../../components/common/FloatingActions";

import { paginate } from "../../utils/paginate";

import "./table.css";

function Table() {

  const { countries, loading } =
    InfoHook();

  const [search, setSearch] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [entriesPerPage, setEntriesPerPage] =
    useState(10);

  const filteredCountries =
    countries.filter((country) =>

      country.country
        .toLowerCase()
        .includes(search.toLowerCase())

    );

  const totalPages = Math.ceil(

    filteredCountries.length /
      entriesPerPage

  );

  const paginatedCountries =
    paginate(

      filteredCountries,

      currentPage,

      entriesPerPage

    );

  if (loading) {

    return <h2>Loading...</h2>;
  }

  return (

    <div className="right-panel table-page">

      <TableHeader />

      <div className="table-controls">

        <TableSelect

          entriesPerPage={
            entriesPerPage
          }

          setEntriesPerPage={
            setEntriesPerPage
          }

          setCurrentPage={
            setCurrentPage
          }

        />

        <TableSearch

          search={search}

          setSearch={setSearch}

          setCurrentPage={
            setCurrentPage
          }

        />

      </div>

      <CovidTable
        countries={paginatedCountries}
      />

      <div className="table-footer">

        <p>

          Showing

          {" "}

          {(currentPage - 1)
            * entriesPerPage + 1}

          {" "}

          to

          {" "}

          {Math.min(

            currentPage
              * entriesPerPage,

            filteredCountries.length

          )}

          {" "}

          of

          {" "}

          {filteredCountries.length}

          {" "}

          entries

        </p>

        <TablePagination

          currentPage={currentPage}

          totalPages={totalPages}

          setCurrentPage={
            setCurrentPage
          }

        />

      </div>
      <FloatingActions />

    </div>
  );
}

export default Table;