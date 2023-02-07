import React from 'react';

import styles from './SearchBar.module.css'
function SearchBar(props) {
  return (
    <div className={styles['search-wrap']}>
      <label className={styles.label}>
        <input type="text" className={styles.search}/>
      </label>
      <button className={styles.btn}>검색</button>
    </div>
  );
}

export default SearchBar;