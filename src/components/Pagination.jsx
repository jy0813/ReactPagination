import React, {useEffect} from 'react';
import styles from './Pagination.module.css'

function Pagination({dataPerPage, currentPage, prevPage, nextPage, firstPage,lastPage, totalData, paginate}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div>
        <div className={styles.pagination}>
          <button className={styles.first} onClick={firstPage} disabled={currentPage === 1}>&#171;</button>
          <button className={styles.prev} onClick={prevPage} disabled={currentPage === 1}>&lt;</button>
          {pageNumbers.map(num => <div className={styles.list} key={num} aria-current={currentPage === num ? 'active' : null}>
            <button className={styles.btn} onClick={() => paginate(num)}>{num}</button>
          </div>)}
          <button className={styles.next} onClick={nextPage} disabled={currentPage === pageNumbers[pageNumbers.length -1]}>&gt;</button>
          <button className={styles.last} onClick={lastPage} disabled={currentPage === pageNumbers[pageNumbers.length -1]}>&#187;</button>
        </div>
      </div>
  );
}

export default Pagination;