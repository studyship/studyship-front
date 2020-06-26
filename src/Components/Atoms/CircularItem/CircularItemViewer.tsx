import React from 'react'
import styled from 'styled-components'
import { MarginStyleProps, PaddingStyleProps } from 'src/@types'
import { paddingStyles, marginStyles } from 'src/styles/mixin'

const Container = styled.div<CircularItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ area }) => area && area};
  height: ${({ area }) => area && area};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ffffff')};
  border: ${({ borderStyle }) => borderStyle && borderStyle};
  border-radius: 50%;
  ${paddingStyles};
  ${marginStyles};
`

interface CircularItemProps extends MarginStyleProps, PaddingStyleProps {
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
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
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
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      {children}
    </Container>
  )
}

export default CircularItemViewer
