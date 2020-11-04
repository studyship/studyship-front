import React from 'react'
import styled from 'styled-components'

interface StyleProps {
  className?: string
  fontSize?: string
  fontColor?: string
  justifySelf?: string
}

interface BoldTextProps extends StyleProps {
  text: string
  onClick?: () => void
}

const Container = styled.h2<StyleProps>`
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize ?? '22px'};
  color: ${({ fontColor }) => fontColor ?? 'black'};
  justify-self: ${({ justifySelf }) => justifySelf && justifySelf};
`

const BoldTextViewer = ({
  className,
  fontSize,
  text,
  onClick,
  fontColor,
  justifySelf,
}: BoldTextProps) => {
  return (
    <Container
      className={className}
      fontSize={fontSize}
      onClick={onClick}
      fontColor={fontColor}
      justifySelf={justifySelf}
    >
      {text}
    </Container>
  )
}

export default BoldTextViewer
