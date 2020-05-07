import React from 'react'
import styled from 'styled-components'
import {
  NormalText,
  Button,
  RowBox,
  Input,
  YellowCheckbox,
} from 'src/Components/Atoms'
import { mainColorBlue } from 'src/styles/Colors'
import { IEmailFormViewer } from './types'

const Container = styled.div`
  > input:nth-child(2) {
    margin-bottom: 10px;
  }
  > input:nth-child(3) {
    margin-bottom: 10px;
  }
  > input:nth-child(4) {
    margin-bottom: 10px;
  }
`
const Title = styled(NormalText)`
  margin-bottom: 9px;
`
const NextButton = styled(Button)`
  margin-bottom: 8px;
  border-radius: 33px;
  background-color: ${mainColorBlue};
  font-weight: bold;
`
const BeforeButton = styled(Button)`
  color: #b3b3b3;
`
const TOU = styled(RowBox)`
  margin: 16px 0px;
  > :nth-child(1) {
    margin-right: 9px;
  }
`

const EmailFormViewer = ({
  handleNextStage,
  bindCheckbox,
}: IEmailFormViewer) => {
  return (
    <Container>
      <Title text="이메일 계정으로 가입" fontSize="14px" />
      <Input placeholder="닉네임 / 이름" />
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" />
      <Input placeholder="비밀번호 확인 (문자, 숫자 조합 8자 이상)" />
      <TOU>
        <YellowCheckbox bindCheckbox={bindCheckbox} />
        <NormalText
          fontSize="14px"
          text="이용약관과 개인정보처리방침을 확인했으며, 이에 동의합니다"
        />
      </TOU>
      <NextButton
        text="다음~?"
        onClick={() => {
          handleNextStage('interest')
        }}
        fontSize="15px"
      />
      <BeforeButton
        text="이전으로"
        fontSize="12px"
        onClick={() => {
          handleNextStage('choice')
        }}
      />
    </Container>
  )
}

export default EmailFormViewer
