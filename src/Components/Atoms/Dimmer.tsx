import React from 'react'
import styled from 'styled-components'

const Container = styled.div<StyleProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const Dimme = styled.div<StyleProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${({ borderRadius }) => borderRadius ?? '10px'};
  background-color: #000000;
  opacity: 0.6;
  z-index: 100;
`

interface StyleProps {
  borderRadius?: string
}
interface DimmerProps extends StyleProps {
  children?: JSX.Element
}

const Dimmer = ({ borderRadius, children }: DimmerProps) => {
  return (
    <Container borderRadius={borderRadius}>
      <Dimme borderRadius={borderRadius}></Dimme>
      {children}
    </Container>
  )
}

export default Dimmer
