import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Icon,
  InputHover,
  VerticalBar,
  RowBox,
  Button,
} from 'src/Components/Atoms'
import LogoColorS from 'src/styles/icons/SS_Logo_colorS.png'
import notificationLogo from 'src/styles/icons/ss_icon_notification.svg'
import profileLogo from 'src/styles/icons/ss_icon_profile.svg'
import messageLogo from 'src/styles/icons/ss_icon_message.svg'
import { IHeader, ITopNav } from './types'
import { isMobile } from 'react-device-detect'
import { ModalTemplate } from '@devgw-react/blank-modal'
import { AccountForm } from '..'
import {
  mainColorBlue,
  backgroundColor,
  mainColorBlack,
  mainColorYellow,
  whiteColor,
} from 'src/styles/Colors'

const TopNav = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 160px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  transition: 0.6s;
  ${(props: ITopNav) =>
    props.screenHeight &&
    'padding: 10px 160px; background-color:white; border-bottom:1px solid (0,0,0,.1); color:black;'}
  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 20px 20px;
  }
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
  > * :nth-child(2) {
    margin-left: 5px;
    margin-right: 5px;
  }
`
const IconBox = styled.div`
  width: 20px;
  height: 20px;
`

const HeaderViewer = ({
  screenHeight,
  isVisible,
  handleModalActive,
  handleModalInactive,
  handleNextStage,
  currentTab,
  isLoggedIn,
}: IHeader) => {
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
      <TopNav screenHeight={screenHeight}>
        <LogoLink to="#LOGO">
          {isMobile ? (
            <Icon imgSrc={screenHeight ? LogoColorS : LogoColorS} />
          ) : (
            <Icon imgSrc={screenHeight ? LogoColorS : LogoColorS} />
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
            <SLink to="#Services">About</SLink>
          </List>
          <VerticalBar />
          <List>
            {isLoggedIn ? (
              <IconRow>
                <IconBox>
                  <Icon imgSrc={messageLogo} />
                </IconBox>
                <IconBox>
                  <Icon imgSrc={notificationLogo} />
                </IconBox>
                <IconBox>
                  <Icon imgSrc={profileLogo} />
                </IconBox>
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
      </TopNav>
    </>
  )
}

export default HeaderViewer
