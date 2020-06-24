import React from 'react'
import styled from 'styled-components'
import { marginStyles, paddingStyles } from 'src/styles/mixin'
import { MarginStyleProps, PaddingStyleProps } from 'src/@types'

const Container = styled.div<TagProps>`
  border: 1px solid #60d3e0;
  border-radius: 15px;
  border: ${({ borderColor }) => borderColor && `1px solid ${borderColor}`};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ffffff')};
  color: ${({ fontColor }) => (fontColor ? fontColor : '#60d3e0')};
  ${marginStyles};
  ${paddingStyles};
`

interface TagProps extends MarginStyleProps, PaddingStyleProps {
  paddingVertical?: string
  paddingHorizontal?: string
  borderColor?: string
  bgColor?: string
  fontColor?: string
  text?: string
}

const TagViewer = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingVertical,
  paddingHorizontal,
  borderColor,
  bgColor,
  fontColor,
  text,
}: TagProps) => {
  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingTop={paddingVertical}
      paddingBottom={paddingVertical}
      paddingLeft={paddingHorizontal}
      paddingRight={paddingHorizontal}
      borderColor={borderColor}
      bgColor={bgColor}
      fontColor={fontColor}
    >
      {text}
    </Container>
  )
}

export default TagViewer
