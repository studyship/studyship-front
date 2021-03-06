import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ModalTemplate } from '@devgw-react/blank-modal'

import { InputHover, VerticalBar, RowBox, Icon } from 'src/Components/Atoms'
import { Header, AccountForm, MediaSize } from 'src/Components/Templates'
import { ProfileTooltip, AccountAndSignIn } from '..'
import colorLogo from 'src/styles/icons/SS_Logo_colorS.png'
import { ReactComponent as MessageIcon } from 'src/styles/icons/ss_icon_message.svg'
import { ReactComponent as NotificationIcon } from 'src/styles/icons/ss_icon_notification.svg'
import { ReactComponent as ProfileIcon } from 'src/styles/icons/ss_icon_profile.svg'
import { mainColorBlue } from 'src/styles/Colors'
import { TabTypes } from 'src/@types'

const HeaderWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`
const Nav = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const List = styled.li`
  display: flex;
  position: relative;
`
const LogoLink = styled(Link)`
  position: relative;
  width: 200px;
  height: 30px;
  font-weight: 700;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.6s;
  @media screen and (max-width: 450px) {
    width: 50px;
    height: 50px;
  }
`
const SLink = styled(Link)`
  min-width: 38px;
  margin: 0 15px;
  :hover {
    font-weight: bold;
    color: ${mainColorBlue};
  }
  @media screen and (max-width: 450px) {
    margin: 0 5px;
  }
`
const IconRow = styled(RowBox)`
  margin-left: 10px;
  > * :nth-child(2) {
    margin-left: 15px;
    margin-right: 15px;
  }
`

interface MainHeaderTypes {
  isVisible: boolean
  handleModalActive: () => void
  handleModalInactive: () => void
  handleNextStage: (nextTab: string) => void
  currentTab: TabTypes
  isLoggedIn: boolean
}

const MainHeaderViewer = ({
  isVisible,
  handleModalActive,
  handleModalInactive,
  handleNextStage,
  currentTab,
  isLoggedIn,
}: MainHeaderTypes) => {
  return (
    <>
      <ModalTemplate
        isVisible={isVisible}
        handleModalInactive={handleModalInactive}
        borderRadius="10px"
      >
        <AccountForm
          handleModalInactive={handleModalInactive}
          currentTab={currentTab}
        />
      </ModalTemplate>
      <Header>
        <MediaSize>
          <HeaderWrapper>
            <LogoLink to="/">
              <Icon imgSrc={colorLogo} />
            </LogoLink>
            <Nav>
              <InputHover />
              <List>
                <SLink to="#HOME">카테고리</SLink>
              </List>
              <List>
                <SLink to="/create">스터디 만들기</SLink>
              </List>
              <List>
                <SLink to="#Services">ABOUT</SLink>
              </List>
              <VerticalBar marginHorizontal="10px" />
              <List>
                {isLoggedIn ? (
                  <IconRow>
                    <MessageIcon />
                    <NotificationIcon />
                    <ProfileTooltip>
                      <ProfileIcon />
                    </ProfileTooltip>
                  </IconRow>
                ) : (
                  <AccountAndSignIn
                    handleModalActive={handleModalActive}
                    handleNextStage={handleNextStage}
                  />
                )}
              </List>
            </Nav>
          </HeaderWrapper>
        </MediaSize>
      </Header>
    </>
  )
}

export default MainHeaderViewer
