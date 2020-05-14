import React from 'react'
import { AccountModalTemplate } from 'src/Components/Templates'
import { IAccountFormViewer } from './types'

const AccountFormViewer = ({
  handleModalInactive,
  currentTab,
}: IAccountFormViewer) => {
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
