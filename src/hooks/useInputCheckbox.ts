import { useState, useCallback } from 'react'

const useInputCheckbox = (initialValue: boolean) => {
  const [checked, setChecked] = useState<boolean>(initialValue)
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { checked: eventChecked },
    } = e
    setChecked(eventChecked)
  }, [])
  return {
    bind: {
      checked,
      onChange,
    },
  }
}

export default useInputCheckbox
