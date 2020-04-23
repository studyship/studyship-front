import { useState, useCallback } from 'react'

const useInputHandler = (
  initialValue: string,
  validator: (value: string) => boolean,
) => {
  const [value, setValue] = useState<string>(initialValue)
  const onChange = useCallback(
    (e: React.ChangeEvent<any>) => {
      let willUpdate = false
      const {
        target: { value },
      } = e
      willUpdate = validator(value)
      if (willUpdate) {
        console.log('@@@')

        setValue(value)
      }
    },
    [validator],
  )
  return {
    bind: {
      value,
      onChange,
    },
    setValue,
  }
}

export default useInputHandler
