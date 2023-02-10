import './App.css';
import useAxios from "./hooks/use-axios";
import Table from "./components/Table";
import Pagination3 from "./components/Pagination3";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Select2 from "./components/Select2";

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const OPTION_LIST = [
  {
    key: 10,
    value: '10개'
  },
  {
    key: 20,
    value: '20개'
  },
  {
    key: 50,
    value: '50개'
  },
]

function ListPage(props) {
  const data = useAxios(BASE_URL,'posts')
  const [currentPage, setCurrentPage] = useState(1);
  const [viewData, setViewData] = useState(10);
  const [viewPage] = useState(5);
  const totalPage = Math.ceil(data?.length / viewData);
  const pageGroup = Math.ceil(currentPage / viewPage);
  const lastPage = pageGroup * viewPage > totalPage ? totalPage : pageGroup * viewPage;
  const firstPage = lastPage - (viewPage - 1) <= 0 ? 1 : lastPage - (viewPage - 1);
  const [searchValue, setSearchValue] = useState('');


  const searchEvent = () => {
    const search = data?.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase()) || item.body.toUpperCase().includes(searchValue.toUpperCase()))
    slicedList(search)
    console.log(slicedList(search))
  }



 const slicedList = (data) => {
      const startIndex = (currentPage - 1) * viewData
      const endIndex = startIndex + viewData
      return data?.slice(startIndex, endIndex)
 }


  return (
    <div className='App'>
      <div className='flex-row'>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchEvent={searchEvent}
        />
        <Select2
          optionList={OPTION_LIST}
          setViewData={setViewData}
        />
      </div>
      <Table data={slicedList(data)}/>
      <Pagination3
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPage={totalPage}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    </div>
  );
}

export default ListPage;