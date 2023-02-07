import React from 'react';
import styles from "./Select.module.css";

function SelectItem({option, selected}) {
  return (
      <li className={styles.option} onClick={() => selected(option)}>
        <button className={styles['option-text']}>{option.value}</button>
      </li>
  );
}

export default SelectItem;