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

  useEffect(() => {
    fetchUrl(initialType);
  }, [])

  return {data, loading, fetchUrl, currentPosts, paginate, dataPerPage}
}

export default useFetch;