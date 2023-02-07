import React, { useState } from 'react';

function useSelect(initialKey, initialValue) {
  const defaultText = '10개'
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const isShowSelect = () => {
    setIsShowOptions(prev => !prev)
  }

  const value = (option) => {
    setSelectedItem([option])
    setIsShowOptions(prev => !prev);
  }
  return [selectedItem, isShowOptions, defaultText, isShowSelect, value]
}

export default useSelect;