import React from 'react'
import styled from 'styled-components'
import {
  Input,
  Button,
  NormalText,
  RowBox,
  VerticalBar,
} from 'src/Components/Atoms'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import 'antd/dist/antd.css'
import { mainColorBlue, mainColorBlack } from 'src/styles/Colors'

const Container = styled.div`
  > input:nth-child(1) {
    margin-bottom: 10px;
  }
  > input:nth-child(2) {
    margin-bottom: 16px;
  }
`
const LoginButton = styled(Button)`
  margin-bottom: 8px;
  background-color: ${mainColorBlue};
`
const GoogleLoginButton = styled(Button)`
  margin-bottom: 10px;
  background-color: #ff4c41;
`
const KakaoLoginButton = styled(Button)`
  margin-bottom: 65px;
  background-color: #ffe141;
`
const LoginKeep = styled(RowBox)`
  margin-bottom: 45px;
`
const SCheckbox = styled(Checkbox)`
  margin-right: 5px;
`
const SimpleLogin = styled(NormalText)`
  margin-bottom: 19px;
`
const FooterBox = styled(RowBox)`
  justify-content: center;
  color: #8d8d8d;
`
const Footer = styled(NormalText)`
  color: inherit;
  cursor: pointer;
  :hover {
    color: ${mainColorBlack};
  }
`

const LoginFormViewer = () => {
  return (
    <Container>
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" />
      <LoginButton text="로그인" />
      <LoginKeep>
        <SCheckbox
          onChange={(e: CheckboxChangeEvent) => {
            console.log(e.target.checked)
          }}
        />
        <NormalText fontSize="15px" text="로그인 상태 유지" />
      </LoginKeep>
      <SimpleLogin fontSize="20px" text="간편 로그인" />
      <GoogleLoginButton text="구글 로그인" />
      <KakaoLoginButton text="카카오 로그인" />
      <FooterBox>
        <Footer fontSize="15px" text="⚓️지금 바로 회원가입" />
        <VerticalBar horizonSapce="5px" />
        <Footer fontSize="15px" text="😢비밀번호를 까먹었어요" />
      </FooterBox>
    </Container>
  )
}

export default LoginFormViewer
