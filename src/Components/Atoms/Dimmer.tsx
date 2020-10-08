import React from 'react'
import styled from 'styled-components'

const Container = styled.div<StyleProps>`
  position: absolute;
  border-radius: ${({ borderRadius }) => borderRadius ?? '10px'};
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.6;
`

interface StyleProps {
  borderRadius?: string
}

const Dimmer = ({ borderRadius }: StyleProps) => {
  return <Container borderRadius={borderRadius} />
}

export default Dimmer
