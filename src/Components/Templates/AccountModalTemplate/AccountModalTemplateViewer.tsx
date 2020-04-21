import React from 'react'
import styled from 'styled-components'
import { NormalText } from 'src/Components/Atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 452px;
  padding: 24px 40px;
`
const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
const Title = styled(NormalText)`
  margin-bottom: 16px;
`

type TAccountModal = {
  children: React.ReactNode
  handleModalInactive: () => void
  title: string
}

const AccountModalTemplateViewer = ({
  children,
  handleModalInactive,
  title,
}: TAccountModal) => {
  return (
    <Container>
      <TopBox>
        <Logo />
        <Close onClick={handleModalInactive} />
      </TopBox>
      <Title text={title} fontSize="20px" />
      {children}
    </Container>
  )
}

export default AccountModalTemplateViewer
