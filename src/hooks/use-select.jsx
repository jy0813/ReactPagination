import React, { useState } from 'react';

function useSelect(initialValue) {
  const defaultText = initialValue
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const isShowSelect = () => {
    setIsShowOptions(prev => !prev)
  }

  const value = (option) => {
    setSelectedItem([option])
    setIsShowOptions(prev => !prev);
  }
  return {selectedItem, isShowOptions, defaultText, isShowSelect, value}
}

export default useSelect;