import "../../pages/tracker/table.css";

function TableSelect({

  entriesPerPage,

  setEntriesPerPage,

  setCurrentPage,

}) {

  const handleEntries = (e) => {

    setEntriesPerPage(
      Number(e.target.value)
    );

    setCurrentPage(1);
  };

  return (

    <div className="table-select">

      <label>

        Show

      </label>

      <select
        value={entriesPerPage}
        onChange={handleEntries}
      >

        <option value={10}>10</option>

        <option value={25}>25</option>

        <option value={50}>50</option>

        <option value={100}>100</option>

      </select>

      <label>

        entries

      </label>

    </div>
  );
}

export default TableSelect;