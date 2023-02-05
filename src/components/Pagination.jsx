import React from 'react';
import styles from './Pagination.module.css'

function Pagination({dataPerPage, totalData, paginate}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
      <div>
        <div className={styles.pagination}>
          {pageNumbers.map(num => <div className={styles.list} key={num}>
            <button className={styles.btn} onClick={() => paginate(num)}>{num}</button>
          </div>)}
        </div>
      </div>
  );
}

export default Pagination;