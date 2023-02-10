import { useCallback, useEffect } from "react";

function usePagination2(setCurrentPage, totalPage, firstPage, lastPage) {

  const pageNumbers = [];

  for (let i = firstPage; i <= lastPage; i++) {
    pageNumbers.push(i)
  }

  const prev = () => setCurrentPage(firstPage - 1);

  const next = () => setCurrentPage(lastPage + 1);

  const first = () => setCurrentPage(1)

  const last = () => setCurrentPage(totalPage);

  const paginate = (pageNum) => setCurrentPage(pageNum)

  const initPageNum = useCallback(() => {
    setCurrentPage(1)
  },[setCurrentPage])

  useEffect(() => {
    initPageNum()
  },[initPageNum, totalPage])

  return { pageNumbers, prev, next, first, last, paginate }
}

export default usePagination2;