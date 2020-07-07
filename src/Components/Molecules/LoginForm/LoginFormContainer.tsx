import React from 'react'
import { useDispatch } from 'react-redux'
import LoginFormViewer from './LoginFormViewer'
import { ILoginForm } from './types'
import { useInputCheckbox } from 'src/hooks'
import { SAVE_TOKEN_SUCCESS } from 'src/store/modules/users/actions'

const LoginFormContainer = ({
  handleNextStage,
  handleModalInactive,
}: ILoginForm) => {
  const dispatch = useDispatch()

  const { bind: bindCheckbox } = useInputCheckbox(false)

  const handleSubmit = () => {
    // const { checked } = bindCheckbox
    // const config = {
    //   url: '',
    //   checked,
    // }
    dispatch({ type: SAVE_TOKEN_SUCCESS })
  }

  return (
    <LoginFormViewer
      handleNextStage={handleNextStage}
      bindCheckbox={bindCheckbox}
      handleSubmit={handleSubmit}
      handleModalInactive={handleModalInactive}
    />
  )
}

export default LoginFormContainer
