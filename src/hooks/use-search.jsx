
function useSearch() {

  return (e, searchEvent) => {
    if (e.key === 'Enter') {
      searchEvent();
    }
  }
}

export default useSearch;