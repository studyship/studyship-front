import React from 'react'
import styled from 'styled-components'

import { dragLock } from 'src/styles/StylesOptions'

const Container = styled.header<StyleProps>`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: ${({ padding }) => (padding ? padding : '20px 0px')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ffffff')};
  transition: 0.6s;
  width: 1570px;
  @media screen and (max-width: 1313px) {
    width: 1180px;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 20px 20px;
  }
  ${dragLock}
`
const Wrapper = styled.div<StyleProps>`
  width: 100%;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ffffff')};
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
    <Wrapper>
      <Container bgColor={bgColor} padding={padding}>
        {children}
      </Container>
    </Wrapper>
  )
}

export default HeaderViewer
