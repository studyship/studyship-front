import React, { useCallback, useState } from 'react'
import { SubNavigator } from 'src/Components/Molecules'

export type UseChecksResult = { renderTabNavs: () => JSX.Element }
export type TabNav = {
  name: string
  to: string
  key: string
}

const useActivationTabs = (
  tabs: readonly TabNav[],
  initialTab?: string,
): UseChecksResult => {
  const [tabOptions, setTabOptions] = useState(() =>
    tabs.map((tab, i) =>
      tab.key === initialTab
        ? { ...tab, isActivation: true }
        : { ...tab, isActivation: false },
    ),
  )

  const handleActivation = useCallback(
    (name: string) => {
      const updateTabOptions = tabOptions.map((tab) =>
        tab.name === name
          ? {
              ...tab,
              isActivation: true,
            }
          : {
              ...tab,
              isActivation: false,
            },
      )
      setTabOptions(updateTabOptions)
    },
    [tabOptions],
  )

  const renderTabNavs = () => (
    <SubNavigator tabOptions={tabOptions} handleActivation={handleActivation} />
  )

  return { renderTabNavs }
}
export default useActivationTabs
