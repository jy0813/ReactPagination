import './App.css';
import useFetch from "./hooks/use-fetch";
import Loading from "./components/Loading"
import Table from "./components/Table";
import Pagination from './components/Pagination'

const baseUrl = 'https://jsonplaceholder.typicode.com'

function App() {
  const {data, loading, currentPosts, currentPage, prevPage, nextPage,firstPage, lastPage,dataPerPage, paginate} = useFetch(baseUrl,'posts');
  return (
    <div className="App">
      {loading ? <Loading/> : <Table data={currentPosts}/>}
        <Pagination
            currentPage={currentPage}
            firstPage={firstPage}
            lastPage={lastPage}
            prevPage={prevPage}
            nextPage={nextPage}
            dataPerPage={dataPerPage}
            totalData={data?.length}
            paginate={paginate}
      />
    </div>
  );
}

export default App;
