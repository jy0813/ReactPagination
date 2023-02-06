import React from 'react';
import Table from "./components/Table";
import './App.css';
import Pagination2 from "./components/Pagination2";
import usePagination from "./hooks/use-pagination";
import useAxios from "./hooks/use-axios";

const baseUrl = 'https://jsonplaceholder.typicode.com'

function DataPage(props) {
  const { data } = useAxios(baseUrl,'posts')
  const {currentPage, totalPage, currentData, firstPage, lastPage, prev, next, first, last, paginate } = usePagination(data, 10, 5);


  return (
    <>
      <Table data={currentData}/>
      <Pagination2
        currentPage={currentPage}
        totalPage={totalPage}
        firstPage={firstPage}
        lastPage={lastPage}
        prev={prev}
        next={next}
        first={first}
        last={last}
        paginate={paginate}
      />
    </>
  );
}

export default DataPage;