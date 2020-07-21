import React from 'react'

import AccountAndSignInViewer from './AccountAndSignInViewer'

type AccountAndSignInProps = {
  handleModalActive: () => void
  handleNextStage: (nextTab: string) => void
}

const AccountAndSignInContainer = ({
  handleModalActive,
  handleNextStage,
}: AccountAndSignInProps) => {
  return (
    <AccountAndSignInViewer
      handleNextStage={handleNextStage}
      handleModalActive={handleModalActive}
    />
  )
}

export default AccountAndSignInContainer
