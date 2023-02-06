import React, { useEffect, useState } from 'react';
import axios from "axios";


function useAxios(baseUrl, initialType) {
  const [data, setData] = useState(null)

  const getData = async (type) => {
    const response = await axios.get(`${baseUrl}/${type}`)
    setData(response.data);
  }

  useEffect(() => {
    getData(initialType).catch((err) => console.log(err));
  },[])

  return {data, getData}
}

export default useAxios;