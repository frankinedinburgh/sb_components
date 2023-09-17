import { FC } from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {/* {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`${styles.button} ${currentPage === index + 1 ? styles.active : ''}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))} */}
      <button
        className={styles.button}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};