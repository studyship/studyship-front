import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { ModalTemplate } from '@devgw-react/blank-modal'

import {
  Icon,
  InputHover,
  VerticalBar,
  RowBox,
  Button,
} from 'src/Components/Atoms'
import { AccountForm, ProfileTooltip } from '..'
import LogoColorS from 'src/styles/icons/SS_Logo_colorS.png'
import notificationLogo from 'src/styles/icons/ss_icon_notification.svg'
import profileLogo from 'src/styles/icons/ss_icon_profile.svg'
import messageLogo from 'src/styles/icons/ss_icon_message.svg'
import {
  mainColorBlue,
  backgroundColor,
  mainColorBlack,
  mainColorYellow,
  whiteColor,
} from 'src/styles/Colors'
import { Header } from 'src/Components/Templates'
import { TabTypes } from 'src/@types'

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
const AccountBox = styled(RowBox)`
  > * :nth-child(1) {
    margin-left: 15px;
    margin-right: 5px;
  }
`
const Account = styled(Button)`
  padding: 4px 10px;
  :nth-child(1) {
    border: 1px solid black;
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
        <LogoLink to="#LOGO">
          {isMobile ? (
            <Icon imgSrc={LogoColorS} />
          ) : (
            <Icon imgSrc={LogoColorS} />
          )}
        </LogoLink>
        <Nav>
          <InputHover />
          <List>
            <SLink to="#HOME">카테고리</SLink>
          </List>
          <List>
            <SLink to="#About">스터디 만들기</SLink>
          </List>
          <List>
            <SLink to="#Services">ABOUT</SLink>
          </List>
          <VerticalBar marginHorizontal="10px" />
          <List>
            {isLoggedIn ? (
              <IconRow>
                <Icon imgSrc={messageLogo} cursor="pointer" />
                <Icon imgSrc={notificationLogo} cursor="pointer" />
                <ProfileTooltip>
                  <Icon imgSrc={profileLogo} cursor="pointer" />
                </ProfileTooltip>
              </IconRow>
            ) : (
              <AccountBox>
                <Account
                  onClick={() => {
                    handleNextStage('login')
                    handleModalActive()
                  }}
                  text="로그인"
                  bgColor={backgroundColor}
                  fontColor={mainColorBlack}
                  fontSize="14px"
                />
                <Account
                  onClick={() => {
                    handleNextStage('choice')
                    handleModalActive()
                  }}
                  text="회원가입"
                  bgColor={mainColorYellow}
                  fontColor={whiteColor}
                  fontSize="14px"
                />
              </AccountBox>
            )}
          </List>
        </Nav>
      </Header>
    </>
  )
}

export default MainHeaderViewer
