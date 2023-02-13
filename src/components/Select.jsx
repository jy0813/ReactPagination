import styles from './Select.module.css'
import SelectItem from "./SelectItem";
import useSelect from "../hooks/use-select";


function Select({optionList,setViewData}) {
  const {selectedItem, isShowOptions, defaultText, isShowSelect, value} = useSelect(optionList[0].value)
  return (
    <div className={styles['select-menu']}>
      <button className={styles['select-btn']} aria-controls='custom-select' aria-haspopup="true"
              aria-expanded="true" onClick={isShowSelect}>
        <span>{selectedItem.length > 0 ? selectedItem[0].value : defaultText}</span>
        <div className={styles['icon-btn']}>선택</div>
      </button>
      {isShowOptions && <ul className={styles.options} id='custom-select' role='listbox'>
        {optionList.map((option) =>
          <SelectItem
            key={option.key}
            option={option}
            selected={value}
            setViewData={setViewData}
          />
        )}
      </ul>}
    </div>
  );
}

export default Select;