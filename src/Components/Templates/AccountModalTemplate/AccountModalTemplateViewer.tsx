import React from 'react'
import styled from 'styled-components'
import { RowBox, Icon, NormalText } from 'src/Components/Atoms'
import textLogoBlack from 'src/styles/icons/ss_logo_black_text.svg'
import closeIcon from 'src/styles/icons/ss_logo_close.png'
import { TAccountModal } from './types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 18px 18px;
`
const TopBox = styled(RowBox)`
  justify-content: space-between;
  margin-bottom: 24px;
`
const Logo = styled.div`
  flex: 1;
  text-align: center;
`
const Close = styled.div`
  cursor: pointer;
`

const Title = styled(NormalText)`
  margin-bottom: 8px;
`
const SubTitle = styled(NormalText)`
  margin-bottom: 9px;
`

const AccountModalTemplateViewer = ({
  children,
  handleModalInactive,
  title,
  subTitle,
  horizontal,
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
      {typeof title === 'object' ? (
        title.map((item: string) => <Title text={item} fontSize="20px" />)
      ) : (
        <Title text={title} fontSize="20px" />
      )}
      <SubTitle text={subTitle} fontSize="14px" />
      {children}
    </Container>
  )
}

export default AccountModalTemplateViewer
