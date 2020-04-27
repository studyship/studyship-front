import React from 'react'
import styled from 'styled-components'
import { RowBox, Icon, NormalText } from 'src/Components/Atoms'
import textLogoBlack from 'src/styles/icons/ss_logo_black_text.png'
import closeIcon from 'src/styles/icons/close.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 452px;
  padding: 24px 40px;
`
const TopBox = styled(RowBox)`
  justify-content: space-between;
  margin-bottom: 26px;
`
const Logo = styled.div`
  width: 84px;
  height: 16px;
`
const Close = styled.div`
  width: 19px;
  height: 19px;
  cursor: pointer;
`
const InfoSentence = styled(NormalText)`
  line-height: 27px;
  :nth-child(3) {
    margin-bottom: 27px;
  }
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
      <InfoSentence text="나랑 잘 맞는 스터디메이트," fontSize="20px" />
      <InfoSentence text="스터디쉽에서 구해보세요!" fontSize="20px" />
      {children}
    </Container>
  )
}

export default AccountModalTemplateViewer
