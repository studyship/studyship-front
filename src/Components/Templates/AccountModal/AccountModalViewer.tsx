import React from 'react'
import styled from 'styled-components'
import { RowBox, Icon, NormalText } from 'src/Components/Atoms'
import { ReactComponent as TextLogoBlack } from 'src/styles/icons/ss_logo_black_text.svg'
import closeIcon from 'src/styles/icons/ss_logo_close.png'
import { getUniqueKey } from 'src/lib'
import { dragLock } from 'src/styles/StylesOptions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 18px 32px;
  ${dragLock};
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

type AccountModalProps = {
  className?: string
  children: React.ReactNode
  handleModalInactive: () => void
  title?: string | Array<string>
  subTitle?: string
  horizontal?: string
}

const AccountModalViewer = ({
  className,
  children,
  handleModalInactive,
  title,
  subTitle,
  horizontal,
}: AccountModalProps) => {
  return (
    <Container className={className}>
      <TopBox>
        <Logo>
          <TextLogoBlack />
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
      {subTitle && <SubTitle text={subTitle} fontSize="14px" />}
      {children}
    </Container>
  )
}

export default AccountModalViewer
