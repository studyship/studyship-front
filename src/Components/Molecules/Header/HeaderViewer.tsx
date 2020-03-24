import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
  z-index: 100;
  transition: 0.6s;
  ${(props: IHeader) =>
    props.screenHeight &&
    'padding: 10px 100px; background-color:white; border-bottom:1px solid (0,0,0,.1); color:black;'}
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
  font-weight: 700;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.6s;
`
const SLink = styled(Link)`
  position: relative;
  margin: 0 15px;
  letter-spacing: 2px;
  font-weight: 300;
`

interface IHeader {
  screenHeight: boolean
}

const HeaderViewer = ({ screenHeight }: IHeader) => {
  return (
    <Header screenHeight={screenHeight}>
      <LogoLink to="#LOGO">LOGO</LogoLink>
      <Nav>
        <List>
          <SLink to="#HOME">HOME</SLink>
        </List>
        <List>
          <SLink to="#About">About</SLink>
        </List>
        <List>
          <SLink to="#Services">Services</SLink>
        </List>
        <List>
          <SLink to="#Team">Team</SLink>
        </List>
      </Nav>
    </Header>
  )
}

export default HeaderViewer
