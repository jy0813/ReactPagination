
function useSearch(initialValue, setSearchValue) {



  const searchInputValue = (e) => {
    setSearchValue(e.target.value)
  }

  const searchInit = () => {
    setSearchValue('')
  }

  return {searchInputValue, searchInit}
}

export default useSearch;