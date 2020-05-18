import React from 'react'
import styled from 'styled-components'
import { RowBox, Icon, NormalText } from 'src/Components/Atoms'
import textLogoBlack from 'src/styles/icons/ss_logo_black_text.svg'
import closeIcon from 'src/styles/icons/ss_logo_close.png'
import { TAccountModal } from './types'
import { getUniqueKey } from 'src/lib'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 18px 32px;
`
const TopBox = styled(RowBox)`
  justify-content: space-between;
  width: 100%;
  margin-bottom: 26px;
`
const Logo = styled.div`
  flex: 1;
  text-align: center;
`
const Close = styled.div`
  cursor: pointer;
`

const Title = styled(NormalText)`
  margin-bottom: 10px;
`
const SubTitle = styled(NormalText)`
  margin-bottom: 11px;
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
      {typeof title === 'object'
        ? title.map((item, index) => (
            <Title text={item} fontSize="20px" key={getUniqueKey(index)} />
          ))
        : title && <Title text={title} fontSize="20px" />}
      <SubTitle text={subTitle} fontSize="14px" />
      {children}
    </Container>
  )
}

export default AccountModalTemplateViewer
