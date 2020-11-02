import React from 'react'
import { AccountModal } from 'src/Components/Templates'
import { TabTypes } from 'src/@types'

interface AccountFormProps {
  handleModalInactive: () => void
  currentTab: TabTypes
}

const AccountFormViewer = ({
  handleModalInactive,
  currentTab,
}: AccountFormProps) => {
  return (
    <AccountModal
      handleModalInactive={handleModalInactive}
      title={currentTab.title!}
      subTitle={currentTab.subTitle!}
      horizontal={currentTab.horizontal!}
    >
      {currentTab.form}
    </AccountModal>
  )
}

export default AccountFormViewer
