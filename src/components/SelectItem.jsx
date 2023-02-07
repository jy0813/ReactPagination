import React from 'react';
import styles from "./Select.module.css";


function SelectItem({option, selected, setViewData}) {
  const changeData = () => {
    selected(option)
    setViewData(option.key)
  }

  return (
      <li className={styles.option} onClick={changeData}>
        <button className={styles['option-text']}>{option.value}</button>
      </li>
  );
}

export default SelectItem;