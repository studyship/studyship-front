import React from 'react'
import styled from 'styled-components'
import {
  Input,
  Button,
  NormalText,
  RowBox,
  VerticalBar,
  YellowCheckbox,
} from 'src/Components/Atoms'
import { mainColorBlue, mainColorBlack, darkGrey } from 'src/styles/Colors'
import { ILoginFormViewer } from './types'

const Container = styled.div`
  > input:nth-child(2) {
    margin-bottom: 10px;
  }
  > input:nth-child(3) {
    margin-bottom: 16px;
  }
`
const LoginButton = styled(Button)`
  margin-bottom: 8px;
  background-color: ${mainColorBlue};
  border-radius: 33px;
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
const SimpleLogin = styled(NormalText)`
  margin-left: 4px;
  color: ${darkGrey};
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
const Title = styled(NormalText)`
  margin-bottom: 16px;
`

const LoginFormViewer = ({
  handleNextStage,
  bindCheckbox,
  handleSubmit,
  handleModalInactive,
}: ILoginFormViewer) => {
  return (
    <Container>
      <Title text="이메일로 로그인" fontSize="15px" />
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" />
      <LoginButton
        text="로그인"
        onClick={() => {
          handleModalInactive()
          handleSubmit()
        }}
      />
      <LoginKeep>
        <YellowCheckbox bindCheckbox={bindCheckbox} />
        <SimpleLogin fontSize="13px" text="로그인 상태 유지" />
      </LoginKeep>
      <GoogleLoginButton text="구글 로그인" />
      <KakaoLoginButton text="카카오 로그인" />
      <FooterBox>
        <Footer
          fontSize="15px"
          text="⚓️지금 바로 회원가입"
          onClick={() => {
            handleNextStage('join')
          }}
        />
        <VerticalBar horizonSapce="5px" />
        <Footer fontSize="15px" text="😢비밀번호를 까먹었어요" />
      </FooterBox>
    </Container>
  )
}

export default LoginFormViewer
