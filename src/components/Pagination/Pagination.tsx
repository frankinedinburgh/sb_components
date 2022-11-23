import cn from "classnames";
import { DOTS, usePagination } from "../../hooks";
import style from "./Pagination.module.css";

export const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={cn(style["pagination-container"], {
        [className]: className,
      })}
    >
      <li
        className={cn(style["pagination-item"], {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={(style.arrow, style.left)} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className={style.dots}>&#8230;</li>;
        }

        return (
          <li
            className={cn(style["pagination-item"], {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={cn(style["pagination-item"], {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={(style.arrow, style.right)} />
      </li>
    </ul>
  );
};
