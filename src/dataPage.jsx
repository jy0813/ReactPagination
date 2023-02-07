import React from 'react';
import Table from "./components/Table";
import './App.css';
import Pagination2 from "./components/Pagination2";
import usePagination from "./hooks/use-pagination";
import useAxios from "./hooks/use-axios";
import SearchBar from "./components/SearchBar";
import Select from "./components/Select";
import useSelect from "./hooks/use-select";

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const OPTION_LIST = [
  {
    key: '10',
    value: '10개'
  },
  {
    key: '20',
    value: '20개'
  },
  {
    key: '50',
    value: '50개'
  },
]

function DataPage(props) {
  const { data } = useAxios(BASE_URL,'posts')
  const {currentPage, totalPage, currentData, firstPage, lastPage, prev, next, first, last, paginate } = usePagination(data, 10, 5);
  const [selectedItem, isShowOptions,defaultText, isShowSelect, value] = useSelect();

  return (
    <div className='App'>
      <div className='flex-row'>
        <SearchBar/>
        <Select
          optionList={OPTION_LIST}
          selectedItem={selectedItem}
          isShowOptions={isShowOptions}
          defaultText={defaultText}
          isShowSelect={isShowSelect}
          value={value}
        />
      </div>
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
    </div>
  );
}

export default DataPage;