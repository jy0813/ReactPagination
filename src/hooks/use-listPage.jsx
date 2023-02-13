import { useEffect, useState } from 'react';

function useListPage(data) {

  const [renderList, setRenderList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewData, setViewData] = useState(10);
  const [viewPage] = useState(5);
  const totalPage = Math.ceil(renderList?.length / viewData);
  const pageGroup = Math.ceil(currentPage / viewPage);
  const lastPage = pageGroup * viewPage > totalPage ? totalPage : pageGroup * viewPage;
  const firstPage = lastPage - (viewPage - 1) <= 0 ? 1 : lastPage - (viewPage - 1);
  const [searchValue, setSearchValue] = useState('');

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

  useEffect(() => {
    setRenderList(data)
  },[data])


  return [renderList, setViewData, setCurrentPage, currentPage,  totalPage, firstPage, lastPage, searchValue, setSearchValue,  searchEvent, searchInit, slicedList];
}

export default useListPage;