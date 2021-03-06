import React from 'react'
import styled from 'styled-components'
import {
  Input,
  Button,
  NormalText,
  RowBox,
  VerticalBar,
  YellowCheckbox,
  SocialLoginButton,
} from 'src/Components/Atoms'
import { mainColorBlue, mainColorBlack, darkGrey } from 'src/styles/Colors'
import { ILoginFormViewer } from './types'
import googleIcon from 'src/styles/icons/ss_icon_google.svg'
import kakaoIcon from 'src/styles/icons/ss_icon_kakao.svg'

const Container = styled.div``
const Email = styled(Input)`
  margin-bottom: 10px;
`
const LoginButton = styled(Button)`
  margin-top: 16px;
  margin-bottom: 8px;
  background-color: ${mainColorBlue};
  border-radius: 33px;
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
      <Email placeholder="이메일" />
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
      <SocialLoginButton text="구글 계정으로 로그인" imgSrc={googleIcon} />
      <SocialLoginButton text="카카오 계정으로 로그인" imgSrc={kakaoIcon} />
      <FooterBox>
        <Footer
          fontSize="15px"
          text="⚓️지금 바로 회원가입"
          onClick={() => {
            handleNextStage('choice')
          }}
        />
        <VerticalBar />
        <Footer fontSize="15px" text="😢비밀번호를 까먹었어요" />
      </FooterBox>
    </Container>
  )
}

export default LoginFormViewer
