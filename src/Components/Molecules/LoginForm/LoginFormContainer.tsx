import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import LoginFormViewer from './LoginFormViewer'
import { ILoginForm } from './types'
import { useInputCheckbox } from 'src/hooks'
import { setToken } from 'src/store/modules/users/thunk'
import { SAVE_TOKEN_SUCCESS } from 'src/store/modules/users/actions'
const LoginFormContainer = ({ handleNextStage }: ILoginForm) => {
  const dispatch = useDispatch()

  const { bind: bindCheckbox } = useInputCheckbox(false)

  const handleSubmit = () => {
    const { checked } = bindCheckbox
    const config = {
      url: '',
      checked,
    }
    dispatch({ type: SAVE_TOKEN_SUCCESS })
  }
  return (
    <LoginFormViewer
      handleNextStage={handleNextStage}
      bindCheckbox={bindCheckbox}
      handleSubmit={handleSubmit}
    />
  )
}

export default LoginFormContainer
