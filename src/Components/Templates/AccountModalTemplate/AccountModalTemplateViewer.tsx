import React from 'react'
import styled from 'styled-components'
import { NormalText, RowBox } from 'src/Components/Atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 452px;
  padding: 24px 40px;
`
const TopBox = styled(RowBox)`
  justify-content: space-between;
  margin-bottom: 39px;
`
const Logo = styled.div`
  width: 30px;
  height: 30px;
  background-color: black;
`
const Close = styled.div`
  width: 30px;
  height: 30px;
  background-color: grey;
  cursor: pointer;
`

type TAccountModal = {
  children: React.ReactNode
  handleModalInactive: () => void
}

const AccountModalTemplateViewer = ({
  children,
  handleModalInactive,
}: TAccountModal) => {
  return (
    <Container>
      <TopBox>
        <Logo />
        <Close onClick={handleModalInactive} />
      </TopBox>
      {children}
    </Container>
  )
}

export default AccountModalTemplateViewer
