import React from 'react'
import styled from 'styled-components'
import { RowBox, Icon } from 'src/Components/Atoms'
import onlyShipLogo from 'src/styles/icons/ss_logo_only_ship.png'
import closeIcon from 'src/styles/icons/close.png'

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
  width: 60px;
  height: 33px;
`
const Close = styled.div`
  width: 19px;
  height: 19px;
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
          <Icon imgSrc={onlyShipLogo} />
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
