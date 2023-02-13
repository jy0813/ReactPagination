import './App.css';
import useAxios from "./hooks/use-axios";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Select from "./components/Select";
import useListPage from "./hooks/use-listPage";

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
  const [renderList, setViewData, setCurrentPage, currentPage, totalPage, firstPage, lastPage, searchValue, setSearchValue,  searchEvent, searchInit, slicedList] = useListPage(data)

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