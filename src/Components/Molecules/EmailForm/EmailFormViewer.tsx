import React from 'react'
import styled from 'styled-components'
import { NormalText, Button, RowBox, Input } from 'src/Components/Atoms'
import { Checkbox } from 'antd'
import { mainColorBlue } from 'src/styles/Colors'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

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
  margin-bottom: 16px;
`
const SCheckbox = styled(Checkbox)`
  margin-right: 5px;
`
const NextButton = styled(Button)`
  margin-bottom: 8px;
  background-color: ${mainColorBlue};
`
const TOU = styled(RowBox)`
  margin: 16px 0px;
`

type IEmailForm = {
  handleNextStage: (nextTab: string) => void
}

const EmailFormViewer = ({ handleNextStage }: IEmailForm) => {
  return (
    <Container>
      <Title text="회원가입" fontSize="20px" />
      <Input placeholder="닉네임 / 이름" />
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" />
      <Input placeholder="비밀번호 확인 (문자, 숫자 조합 8자 이상)" />
      <TOU>
        <SCheckbox
          onChange={(e: CheckboxChangeEvent) => {
            console.log(e.target.checked)
          }}
        />
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
      />
    </Container>
  )
}

export default EmailFormViewer
