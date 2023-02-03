import React, { useEffect, useState } from 'react';

function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUrl = (type) => {
    setLoading(true)
    fetch(`${baseUrl}/${type}`)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchUrl(initialType);
  }, [])

  return {data, loading, fetchUrl}
}

export default useFetch;