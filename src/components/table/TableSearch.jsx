import "../../pages/tracker/table.css";

function TableSearch({

  search,

  setSearch,

  setCurrentPage,

}) {

  const handleSearch = (e) => {

    setSearch(e.target.value);

    setCurrentPage(1);
  };

  return (

    <div className="table-search">

      <label>

        Search:

      </label>

      <input
        type="text"
        value={search}
        onChange={handleSearch}
      />

    </div>
  );
}

export default TableSearch;