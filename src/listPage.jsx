import './App.css';
import useAxios from "./hooks/use-axios";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Select from "./components/Select";

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
  const [renderList, setRenderList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewData, setViewData] = useState(10);
  const [viewPage] = useState(5);
  const totalPage = Math.ceil(renderList?.length / viewData);
  const pageGroup = Math.ceil(currentPage / viewPage);
  const lastPage = pageGroup * viewPage > totalPage ? totalPage : pageGroup * viewPage;
  const firstPage = lastPage - (viewPage - 1) <= 0 ? 1 : lastPage - (viewPage - 1);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setRenderList(data)
  },[data])


  const searchEvent = () => {
    const search = [...data]?.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase()) || item.body.toUpperCase().includes(searchValue.toUpperCase()))
    if(searchValue === '') {
      setRenderList(data)
    } else {
      setRenderList(search)
    }
  }

  const searchInit = () => {
    setSearchValue('')
    setCurrentPage(1);
    setRenderList(data);
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
          searchInit={searchInit}
        />
        <Select
          optionList={OPTION_LIST}
          setViewData={setViewData}
        />
      </div>
      <Table data={slicedList(renderList)}/>
      <Pagination
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