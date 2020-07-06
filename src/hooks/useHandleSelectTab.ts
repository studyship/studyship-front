import { useState, useCallback } from 'react'
import { TabOptionTypes } from 'src/@types'

const useHandleSelectTab = (initialState: any) => {
  const [tabOptions, setTabOptions] = useState<Array<TabOptionTypes>>(
    initialState,
  )
  const onClick = useCallback(
    (selectedId: number) => {
      const updateTabOptions = tabOptions.map((option) =>
        option.id !== selectedId
          ? { ...option, isSelected: false }
          : { ...option, isSelected: true },
      )
      setTabOptions(updateTabOptions)
    },
    [tabOptions],
  )

  return {
    tabOptions,
    onClick,
  }
}

export default useHandleSelectTab
