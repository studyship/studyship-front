import React from 'react'
import AccountFormViewer from './AccountFormViewer'
import { TAccountForm } from './types'

const AccountFormContainer = ({
  handleModalInactive,
  currentTab,
}: TAccountForm) => {
  return (
    <AccountFormViewer
      handleModalInactive={handleModalInactive}
      currentTab={currentTab}
    />
  )
}

export default AccountFormContainer
