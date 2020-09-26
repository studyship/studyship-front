import React from 'react'
import styled from 'styled-components'

import { dragLock } from 'src/styles/StylesOptions'

const Container = styled.header<StyleProps>`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding ?? '20px 0px'};
  background-color: ${({ bgColor }) => bgColor ?? '#ffffff'};
  transition: 0.6s;
  min-width: 100vw;
  ${dragLock};
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
