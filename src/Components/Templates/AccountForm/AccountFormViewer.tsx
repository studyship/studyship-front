import React from 'react'
import { AccountModalTemplate } from 'src/Components/Templates'
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
    <AccountModalTemplate
      handleModalInactive={handleModalInactive}
      title={currentTab.title!}
      subTitle={currentTab.subTitle!}
      horizontal={currentTab.horizontal!}
    >
      {currentTab.form}
    </AccountModalTemplate>
  )
}

export default AccountFormViewer
