import "../../pages/tracker/table.css";

function TablePagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const maxVisible = 5;
  const pages = [];

  pages.push(1);

  for (let i = 2; i <= Math.min(maxVisible, totalPages - 1); i++) {
    pages.push(i);
  }

  if (totalPages > maxVisible + 1) {
    pages.push("...");
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return (
    <div className="pagination">

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          disabled={page === "..."}
          className={currentPage === page ? "active-page" : ""}
          onClick={() => page !== "..." && setCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default TablePagination;
