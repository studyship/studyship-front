import React from 'react'
import styled from 'styled-components'

interface StyleProps {
  className?: string
  fontSize?: string
  fontColor?: string
}

interface BoldTextProps extends StyleProps {
  text: string
  onClick?: () => void
}

const Container = styled.h2<StyleProps>`
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '22px')};
  color: ${({ fontColor }) => (fontColor ? fontColor : 'black')};
`

const BoldTextViewer = ({
  className,
  fontSize,
  text,
  onClick,
  fontColor,
}: BoldTextProps) => {
  return (
    <Container
      className={className}
      fontSize={fontSize}
      onClick={onClick}
      fontColor={fontColor}
    >
      {text}
    </Container>
  )
}

export default BoldTextViewer
