import React  from 'react';
import styles from './Pagination.module.css'


function Pagination2({currentPage, totalPage, firstPage, lastPage, prev, next, first, last, paginate}) {

  const pageNumbers = [];

  for(let i = firstPage; i <= lastPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <div className={styles.pagination}>
        {firstPage === 1 ? null : <button className={styles.first} onClick={first}>&#171;</button>}
        {firstPage === 1 ? null : <button className={styles.prev} onClick={prev}>&lt;</button>}
        {pageNumbers.map((num) =>
          <div className={styles.list} key={num} aria-current={currentPage === num ? 'active' : null}>
            <button className={styles.btn} onClick={() => paginate(num)}>{num}</button>
          </div>
        )}
        {lastPage === totalPage ? null : <button className={styles.next} onClick={next} disabled={currentPage === totalPage}>&gt;</button>}
        {lastPage === totalPage ? null : <button className={styles.last} onClick={last} disabled={currentPage === totalPage}>&#187;</button> }
      </div>
    </div>
  );
}

export default Pagination2;