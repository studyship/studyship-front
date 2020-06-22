import React from 'react'
import styled from 'styled-components'
import { MarginStyleProps } from 'src/@types'

const Container = styled.div<CircularItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ area }) => area && area};
  height: ${({ area }) => area && area};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ffffff')};
  border: ${({ borderStyle }) => borderStyle && borderStyle};
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  border-radius: 50%;
`

interface CircularItemProps extends MarginStyleProps {
  className?: string
  children?: React.ReactNode
  area?: string
  bgColor?: string
  borderStyle?: string
}

const CircularItemViewer = ({
  children,
  area,
  bgColor,
  borderStyle,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: CircularItemProps) => {
  return (
    <Container
      area={area}
      bgColor={bgColor}
      borderStyle={borderStyle}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </Container>
  )
}

export default CircularItemViewer
