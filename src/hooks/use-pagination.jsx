import React, { useState } from 'react';

function usePagination(data, setViewData,setPageGroup) {
  // 현재 페이지 setting
  const [currentPage, setCurrentPage] = useState(1);
  // 전체 페이지 setting
  const totalPage = Math.ceil(data?.length / setViewData);
  // 화면에 보여질 페이지 그룹
  const pageGroup = Math.ceil(currentPage / setPageGroup);

  // 화면에 그려질 마지막 페이지
  const lastPage = pageGroup * setPageGroup > totalPage ? totalPage : pageGroup * setPageGroup;

  //화면에 그려질 첫 페이지
  const firstPage = lastPage - (setPageGroup - 1) <= 0 ? 1 : lastPage - (setPageGroup - 1);

  // 화면에 그려질 첫 데이터
  const lastData = currentPage * setViewData;

  // 화면에 그려질 마지막 데이터
  const firstData = lastData - setViewData;

  // 화면에 출력할 첫 데이터 ~ 마지막 데이터
  const currentData = data?.slice(firstData, lastData);

  const prev = () => setCurrentPage(firstPage - 1);

  const next = () => setCurrentPage(lastPage + 1);

  const first = () => setCurrentPage(1)

  const last = () => setCurrentPage(Math.ceil(data.length / setViewData));

  const paginate = (pageNum) => setCurrentPage(pageNum)

  return { currentPage, totalPage, firstPage, lastPage, currentData, prev, next, first, last, paginate}
}

export default usePagination;