import React from 'react'
import AccountFormViewer from './AccountFormViewer'

import { TabTypes } from 'src/@types'

interface AccountFormProps {
  handleModalInactive: () => void
  currentTab: TabTypes
}

const AccountFormContainer = ({
  handleModalInactive,
  currentTab,
}: AccountFormProps) => {
  return (
    <AccountFormViewer
      handleModalInactive={handleModalInactive}
      currentTab={currentTab}
    />
  )
}

export default AccountFormContainer
