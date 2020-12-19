import React from 'react'
import styled from 'styled-components'
import { BoldText, HorizontalBar } from 'src/Components/Atoms'
import { TopArrowTooltip } from 'src/Components/Templates'
import { useOutsideClickHandler } from '@devgw-react/outside-click'
import { ReactComponent as PencilIcon } from 'src/styles/icons/ss_logo_pencil.svg'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 14px;
  width: 135px;
`
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Name = styled(BoldText)`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
`
const Menu = styled(Link)`
  color: #333333;
  font-size: 16px;
  font-weight: normal;
  :nth-of-type(2n) {
    margin: 30px 0px;
  }
  cursor: pointer;
`

type ProfileTooltipProps = {
  children: React.ReactChild
}

const ProfileTooltipViewer = ({ children }: ProfileTooltipProps) => {
  const { ref, isComponentVisible } = useOutsideClickHandler(false)
  return (
    <Container ref={ref}>
      {children}
      {isComponentVisible && (
        <TopArrowTooltip>
          <Content>
            <NameWrapper>
              <Name fontSize="18px" text="김수민" />
              <PencilIcon style={{ marginBottom: '8px' }} />
            </NameWrapper>
            <HorizontalBar color="#FFC545" />
            <MenuWrapper>
              <Menu to="/profile">프로필</Menu>
              <Menu to="#">Profile</Menu>
              <Menu to="#">Profile</Menu>
              <Menu to="#">Profile</Menu>
            </MenuWrapper>
          </Content>
        </TopArrowTooltip>
      )}
    </Container>
  )
}

export default ProfileTooltipViewer
