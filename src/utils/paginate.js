export function paginate(
  data,
  currentPage,
  entriesPerPage
) {

  const start =
    (currentPage - 1) * entriesPerPage;

  return data.slice(
    start,
    start + entriesPerPage
  );
}