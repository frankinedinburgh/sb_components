import style from "./Pagination.module.css";

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = [1, 2, 3, 4, 5, 6, 7];
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className={style.pagination}>
      <li onClick={onPrevious}>&laquo;</li>
      {paginationRange.map((pageNumber) => (
        <>
          <li onClick={() => onPageChange(pageNumber)}>1</li>
        </>
      ))}
      <li onClick={onNext}>&raquo;</li>
    </ul>
  );
};
