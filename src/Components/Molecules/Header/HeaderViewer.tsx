import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon, InputHover, VerticalBar } from 'src/Components/Atoms'
import LogoColorS from 'src/styles/icons/SS_Logo_colorS.png'
import LogoOnlyColor from 'src/styles/icons/SS_Logo_only.png'
import { IHeader } from './types'
import { isMobile } from 'react-device-detect'

const Header = styled.header`
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
  ${(props: IHeader) =>
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
  position: relative;
  margin: 0 15px;
  letter-spacing: 2px;
  :hover {
    font-weight: bold;
  }
  @media screen and (max-width: 450px) {
    margin: 0 5px;
  }
`

const HeaderViewer = ({ screenHeight }: IHeader) => {
  return (
    <Header screenHeight={screenHeight}>
      <LogoLink to="#LOGO">
        {isMobile ? (
          <Icon imgSrc={screenHeight ? LogoOnlyColor : LogoOnlyColor} />
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
          <SLink to="#Team">로그인</SLink>
        </List>
      </Nav>
    </Header>
  )
}

export default HeaderViewer
