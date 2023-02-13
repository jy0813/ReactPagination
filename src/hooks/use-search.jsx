
function useSearch() {

  const onEnter = (e, searchEvent) => {
    if(e.key === 'Enter') {
      searchEvent();
    }
  }


  return {onEnter}
}

export default useSearch;