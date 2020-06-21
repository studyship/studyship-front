import React from 'react'
import styled from 'styled-components'

import { dragLock } from 'src/styles/StylesOptions'

const Container = styled.header<StyleProps>`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${(props) => (props.padding ? props.padding : '20px 160px')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
  transition: 0.6s;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 20px 20px;
  }
  ${dragLock}
`

interface StyleProps {
  bgColor?: string
  padding?: string
}

interface HeaderProps extends StyleProps {
  children: React.ReactChild | Array<React.ReactChild>
}

const HeaderViewer = ({ children, bgColor, padding }: HeaderProps) => {
  return (
    <Container bgColor={bgColor} padding={padding}>
      {children}
    </Container>
  )
}

export default HeaderViewer
