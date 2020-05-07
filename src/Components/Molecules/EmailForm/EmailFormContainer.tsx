import React from 'react'
import EmailFormViewer from './EmailFormViewer'
import { useInputCheckbox } from 'src/hooks'
import { IEmailForm } from './types'

const EmailFormContainer = ({ handleNextStage }: IEmailForm) => {
  const { bind: bindCheckbox } = useInputCheckbox(false)
  return (
    <EmailFormViewer
      bindCheckbox={bindCheckbox}
      handleNextStage={handleNextStage}
    />
  )
}

export default EmailFormContainer
