import styles from './Pagination.module.css'
import usePagination2 from "../hooks/use-pagination2";


function Pagination3({setCurrentPage,currentPage, totalPage, firstPage, lastPage}) {

  const {pageNumbers, prev, next, first, last, paginate} = usePagination2(setCurrentPage, totalPage, firstPage, lastPage)

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
        {lastPage === totalPage ? null : <button className={styles.next} onClick={next}>&gt;</button>}
        {lastPage === totalPage ? null : <button className={styles.last} onClick={last}>&#187;</button>}
      </div>
    </div>
  );
}

export default Pagination3;