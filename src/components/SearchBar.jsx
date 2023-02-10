import styles from './SearchBar.module.css'
import useSearch from "../hooks/use-search";

function SearchBar({setSearchValue, searchValue, searchEvent}) {
  const {searchInputValue, searchInit} = useSearch('', setSearchValue)
  return (
    <div className={styles['search-wrap']}>
      <label className={styles.label}>
        <input type="text" className={styles.search} placeholder='검색어를 입력해주세요.' value={searchValue} onChange={searchInputValue} />
      </label>
      <button className={styles.btn} onClick={searchEvent}>검색</button>
      <button className={styles.btn} onClick={searchInit}>초기화</button>
    </div>
  );
}

export default SearchBar;