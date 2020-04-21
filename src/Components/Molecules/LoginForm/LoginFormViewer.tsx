import React from 'react'
import styled from 'styled-components'
import { Input, Button } from 'src/Components/Atoms'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import 'antd/dist/antd.css'

const Container = styled.div``
const LoginButton = styled(Button)`
  background-color: #60d3e0;
`
const GoogleLoginButton = styled(Button)`
  background-color: #ff4c41;
`
const KakaoLoginButton = styled(Button)`
  background-color: #ffe141;
`
const SCheckbox = styled(Checkbox)``

const LoginFormViewer = () => {
  return (
    <Container>
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" />
      <LoginButton text="로그인" />
      <SCheckbox
        onChange={(e: CheckboxChangeEvent) => {
          console.log(e.target.checked)
        }}
      />
      <GoogleLoginButton text="구글 로그인" />
      <KakaoLoginButton text="카카오 로그인" />
    </Container>
  )
}

export default LoginFormViewer
