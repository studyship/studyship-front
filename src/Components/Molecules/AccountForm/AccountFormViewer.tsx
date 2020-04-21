import React from 'react'
import { AccountModalTemplate } from 'src/Components/Templates'
import styled from 'styled-components'
import { Input, NormalText, RowBox, Button } from 'src/Components/Atoms'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { mainColorBlue } from 'src/styles/Colors'

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
const TOF = styled(RowBox)`
  margin: 16px 0px;
`

type TAccountForm = {
  handleModalInactive: () => void
}
const AccountFormViewer = ({ handleModalInactive }: TAccountForm) => {
  return (
    <AccountModalTemplate handleModalInactive={handleModalInactive}>
      <Container>
        <Title text="회원기입" fontSize="20px" />
        <Input placeholder="닉네임 / 이름" />
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" />
        <Input placeholder="비밀번호 확인 (문자, 숫자 조합 8자 이상)" />
        <TOF>
          <SCheckbox
            onChange={(e: CheckboxChangeEvent) => {
              console.log(e.target.checked)
            }}
          />
          <NormalText
            fontSize="15px"
            text="이용약관과 개인정보처리방침을 확인했으며, 이에 동의합니다"
          />
        </TOF>
        <NextButton text="회원가입" />
      </Container>
    </AccountModalTemplate>
  )
}

export default AccountFormViewer
