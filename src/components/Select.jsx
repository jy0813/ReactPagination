import React from 'react';
import styles from './Select.module.css'
import SelectItem from "./SelectItem";

function Select({selectedItem, isShowOptions,defaultText, isShowSelect, value, optionList, setViewData}) {
  return (
    <div className={styles['select-menu']}>
      <button className={styles['select-btn']} aria-controls='custom-select' aria-haspopup="true"
              aria-expanded="true" onClick={isShowSelect}>
        <span>{selectedItem.length > 0 ? selectedItem[0].value : defaultText}</span>
        <div className={styles['icon-btn']}>선택</div>
      </button>
      {isShowOptions && <ul className={styles.options} id='custom-select' role='listbox'>
        {optionList.map((option) =>
          <SelectItem key={option.key} option={option} selected={value} setViewData={setViewData}/>
        )}
      </ul>}
    </div>
  );
}

export default Select;