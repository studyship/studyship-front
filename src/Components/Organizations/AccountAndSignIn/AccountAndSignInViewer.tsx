import React from 'react'
import styled from 'styled-components'
import { RowBox, Button } from 'src/Components/Atoms'

const AccountBox = styled(RowBox)`
  > * :nth-child(1) {
    margin-left: 15px;
    margin-right: 5px;
  }
`
const Account = styled(Button)`
  padding: 4px 10px;
  :nth-child(1) {
    border: 1px solid black;
  }
  @media screen and (max-width: 450px) {
    margin: 0 5px;
  }
`

const AccountAndSignInViewer = () => {
  return (
    <AccountBox>
      <Account
        onClick={() => {
          handleNextStage('login')
          handleModalActive()
        }}
        text="로그인"
        bgColor={backgroundColor}
        fontColor={mainColorBlack}
        fontSize="14px"
      />
      <Account
        onClick={() => {
          handleNextStage('choice')
          handleModalActive()
        }}
        text="회원가입"
        bgColor={mainColorYellow}
        fontColor={whiteColor}
        fontSize="14px"
      />
    </AccountBox>
  )
}

export default AccountAndSignInViewer
