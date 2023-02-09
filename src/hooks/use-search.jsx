import React, { useEffect, useRef, useState } from 'react';

function useSearch(data, initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [searchData, setSearchData] = useState([])
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const searchInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const searchEvent = () => {
    const search = data?.filter(item => item.title.toUpperCase().includes(inputValue.toUpperCase()) || item.body.toUpperCase().includes(inputValue.toUpperCase()));
    setSearchData(search)
  }

  const searchInit = () => {
    setInputValue('')
  }

  return {inputValue, inputRef,searchData, searchInputValue, searchInit, searchEvent}
}

export default useSearch;