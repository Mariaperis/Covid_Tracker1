import "../../pages/tracker/table.css";

function TablePagination({

  currentPage,

  totalPages,

  setCurrentPage,

}) {

  const pages =
    [...Array(totalPages).keys()]
      .map((number) => number + 1);

  return (

    <div className="pagination">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
      >

        Previous

      </button>

      {pages.map((page) => (

        <button
          key={page}
          className={
            currentPage === page
              ? "active-page"
              : ""
          }
          onClick={() =>
            setCurrentPage(page)
          }
        >

          {page}

        </button>

      ))}

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
      >

        Next

      </button>

    </div>
  );
}

export default TablePagination;