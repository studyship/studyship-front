import React from 'react'
import AccountChoiceFormViewer from './AccountChoiceFormViewer'
import { AccountChoiceFormProps } from 'src/@types'

const AccountChoiceFormContainer = ({
  handleNextStage,
}: AccountChoiceFormProps) => {
  return <AccountChoiceFormViewer handleNextStage={handleNextStage} />
}

export default AccountChoiceFormContainer
