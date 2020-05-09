import React from 'react'
import styled from 'styled-components'
import { Button, NormalText, RowBox, ColumnBox } from 'src/Components/Atoms'
import { mainColorBlue, mainColorBlack, darkGrey } from 'src/styles/Colors'
import googleIcon from 'src/styles/icons/ss_icon_google.svg'
import kakaoIcon from 'src/styles/icons/ss_icon_kakao.svg'
import { IAccountChoiceForm } from './types'

const Container = styled.div``
const LoginButton = styled(Button)`
  margin-bottom: 8px;
  background-color: ${mainColorBlue};
  border-radius: 33px;
`
const SocialLoginButton = styled(Button)`
  margin-bottom: 10px;
  border-radius: 33px;
  border-color: #e6e6e6;
  color: black;
  font-weight: bold;
  font-size: 14px;
`
const SentenceBox = styled(ColumnBox)`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
const InfoSentence = styled(NormalText)`
  line-height: 27px;
`

const AccountChoiceFormViewer = ({ handleNextStage }: IAccountChoiceForm) => {
  return (
    <Container>
      {/* <SentenceBox>
        <InfoSentence text="나랑 잘 맞는 스터디 메이트," fontSize="20px" />
        <InfoSentence
          text="스터디 쉽에서 간편하게 구해보세요!"
          fontSize="20px"
        />
        <InfoSentence text="물 흐르듯 쉽고 간단한 회원가입" fontSize="14px" />
      </SentenceBox> */}
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
