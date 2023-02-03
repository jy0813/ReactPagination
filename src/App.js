import './App.css';
import useFetch from "./hooks/use-fetch";
import Loading from "./components/Loading"
import Table from "./components/Table";

const baseUrl = 'https://jsonplaceholder.typicode.com'

function App() {
  const {data, loading} = useFetch(baseUrl,'posts');
  return (
    <div className="App">
      {loading ? <Loading/> : <Table data={data}/>}
    </div>
  );
}

export default App;
