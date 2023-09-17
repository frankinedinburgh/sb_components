import { useState } from "react";
import style from "./Pagination.module.css";

export const Pagination = ({ pagination, onClick }) => {
  const [page, setPage] = useState(0);
  const onNext = () => {
    setPage(page + 1);
  };

  const onPrevious = () => {
    setPage(page - 1);
  };

  return (
    <ul className={style.pagination}>
      <li onClick={onPrevious}>&laquo;</li>
      {Array.from(Array(pagination.pageCount).keys()).map((p) => (
        <li key={p} onClick={() => onClick(p)}>
          {p + 1}
        </li>
      ))}
      <li onClick={onNext}>&raquo;</li>
    </ul>
  );
};