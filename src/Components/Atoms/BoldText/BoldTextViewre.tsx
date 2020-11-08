import React from 'react'
import { MarginStyleProps } from 'src/@types'
import { marginStyles } from 'src/styles/mixin'
import styled from 'styled-components'

interface StyleProps extends MarginStyleProps {
  className?: string
  fontSize?: string
  fontColor?: string
  justifySelf?: string
}

interface BoldTextProps extends StyleProps {
  text: string
  onClick?: () => void
}

const Container = styled.div<StyleProps>`
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize ?? '22px'};
  color: ${({ fontColor }) => fontColor ?? 'black'};
  justify-self: ${({ justifySelf }) => justifySelf && justifySelf};
  ${marginStyles};
`

const BoldTextViewer = ({
  className,
  fontSize,
  text,
  onClick,
  fontColor,
  justifySelf,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: BoldTextProps) => {
  return (
    <Container
      className={className}
      fontSize={fontSize}
      onClick={onClick}
      fontColor={fontColor}
      justifySelf={justifySelf}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {text}
    </Container>
  )
}

export default BoldTextViewer
