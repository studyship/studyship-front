import React from 'react'
import styled from 'styled-components'
import { RowBox, Icon } from 'src/Components/Atoms'
import textLogoBlack from 'src/styles/icons/ss_logo_black_text.svg'
import closeIcon from 'src/styles/icons/ss_logo_close.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 18px 18px;
`
const TopBox = styled(RowBox)`
  justify-content: space-between;
  margin-bottom: 26px;
`
const Logo = styled.div`
  flex: 1;
  text-align: center;
`
const Close = styled.div`
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
        <Logo>
          <Icon imgSrc={textLogoBlack} />
        </Logo>
        <Close onClick={handleModalInactive}>
          <Icon imgSrc={closeIcon} />
        </Close>
      </TopBox>
      {children}
    </Container>
  )
}

export default AccountModalTemplateViewer
