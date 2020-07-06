import React, { useState } from 'react'
import { SelectedBoxOptionTypes } from 'src/@types'

const useSelectBox = (initalValue: SelectedBoxOptionTypes) => {
  const [value, setValue] = useState(initalValue)

  const onChange = (selectedOption: SelectedBoxOptionTypes) => {
    setValue(selectedOption)
  }
  return {
    bind: {
      value,
      onChange,
    },
  }
}

export default useSelectBox
