function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) {

  const start =
    (currentPage - 1) * itemsPerPage + 1;

  const end = Math.min(
    currentPage * itemsPerPage,
    totalItems
  );

  return (
    <div className="pagination-container">

      {/* LEFT */}
      <div className="pagination-info">
        Showing {start} to {end} of {totalItems} entries
      </div>

      {/* RIGHT */}
      <div className="pagination-buttons">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => {

          const page = index + 1;

          return (
            <button
              key={page}
              className={
                currentPage === page
                  ? "active-page"
                  : ""
              }
              onClick={() =>
                onPageChange(page)
              }
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            onPageChange(currentPage + 1)
          }
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default TablePagination;