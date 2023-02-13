import { useCallback, useEffect, useState } from 'react';
import axios from "axios";


function useAxios(baseUrl, initialType) {
  const [data, setData] = useState(null)

  const getData = useCallback(async (type) => {
    const response = await axios.get(`${baseUrl}/${type}`)
    setData(response.data);
  },[baseUrl])

  useEffect(() => {
    getData(initialType).catch((err) => console.log(err));
  },[getData, initialType])

  return data;
}

export default useAxios;