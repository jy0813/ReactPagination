import React, { useEffect, useState } from 'react';

function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  const fetchUrl = (type) => {
    setLoading(true)
    fetch(`${baseUrl}/${type}`)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
  }


    const indexOfLast = currentPage * dataPerPage;
    const indexOfFirst = indexOfLast - dataPerPage;
    const currentPosts = data?.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNum) => setCurrentPage(pageNum)
    const prevPage = () => setCurrentPage(prev => prev -1);
    const nextPage = () => setCurrentPage(prev => prev +1);
    const firstPage = (currentPage) => setCurrentPage(currentPage = 1);
    const lastPage = (currentPage) => setCurrentPage(currentPage = Math.ceil(data.length / dataPerPage));

  useEffect(() => {
    fetchUrl(initialType);
  }, [])

  return {data, loading, fetchUrl, currentPosts, currentPage, prevPage, nextPage, firstPage,lastPage, paginate, dataPerPage}
}

export default useFetch;