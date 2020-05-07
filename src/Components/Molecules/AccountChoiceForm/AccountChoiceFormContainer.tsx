import React from 'react'
import AccountChoiceFormViewer from './AccountChoiceFormViewer'
import { IAccountChoiceForm } from './types'

const AccountChoiceFormContainer = ({
  handleNextStage,
}: IAccountChoiceForm) => {
  return <AccountChoiceFormViewer handleNextStage={handleNextStage} />
}

export default AccountChoiceFormContainer
