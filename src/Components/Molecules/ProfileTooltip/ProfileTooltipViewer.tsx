import React from 'react'
import styled from 'styled-components'
import { BoldText, Icon, HorizontalBar, NormalText } from 'src/Components/Atoms'
import { TopArrowTooltip } from 'src/Components/Templates'
import { useComponentVisible } from 'src/hooks'
import { useOutsideClickHandler } from 'ui-custom-hooks/outsideClick'
import pencilIcon from 'src/styles/icons/ss_logo_pencil.svg'

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
const PencilIcon = styled.div`
  margin-bottom: 8px;
`
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
`
const Menu = styled(NormalText)`
  color: #333333;
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
              <PencilIcon>
                <Icon imgSrc={pencilIcon} />
              </PencilIcon>
            </NameWrapper>
            <HorizontalBar color="#FFC545" />
            <MenuWrapper>
              <Menu
                fontSize="16px"
                text="프로필"
                onClick={() => {
                  console.log('PROFILE')
                }}
              />
              <Menu fontSize="16px" text="스터디 신청 현황" />
              <Menu fontSize="16px" text="북마크" />
              <Menu fontSize="16px" text="설정" />
              <Menu fontSize="16px" text="로그아웃" />
            </MenuWrapper>
          </Content>
        </TopArrowTooltip>
      )}
    </Container>
  )
}

export default ProfileTooltipViewer
