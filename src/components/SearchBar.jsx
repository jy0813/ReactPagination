import React from 'react';

import styles from './SearchBar.module.css'
function SearchBar({inputValue, inputRef, searchInputValue, searchInit, searchEvent}) {
  return (
    <div className={styles['search-wrap']}>
      <label className={styles.label}>
        <input type="text" className={styles.search} ref={inputRef} value={inputValue} onChange={searchInputValue}/>
      </label>
      <button className={styles.btn} onClick={searchEvent}>검색</button>
    </div>
  );
}

export default SearchBar;