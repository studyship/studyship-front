import React from 'react'
import styled from 'styled-components'
import { Button, SocialLoginButton } from 'src/Components/Atoms'
import { mainColorBlue } from 'src/styles/Colors'
import googleIcon from 'src/styles/icons/ss_icon_google.svg'
import kakaoIcon from 'src/styles/icons/ss_icon_kakao.svg'
import { AccountChoiceFormProps } from 'src/@types'

const Container = styled.div``
const LoginButton = styled(Button)`
  margin-bottom: 8px;
  background-color: ${mainColorBlue};
  border-radius: 33px;
`

const AccountChoiceFormViewer = ({
  handleNextStage,
}: AccountChoiceFormProps) => {
  return (
    <Container>
      <LoginButton
        text="회원가입"
        onClick={() => {
          handleNextStage('join')
        }}
      />
      <SocialLoginButton text="구글 계정으로 로그인" imgSrc={googleIcon} />
      <SocialLoginButton text="카카오 계정으로 로그인" imgSrc={kakaoIcon} />
    </Container>
  )
}

export default AccountChoiceFormViewer
