import React from 'react'
import styled from 'styled-components'

interface StyleProps {
  className?: string
  fontSize?: string
  fontColor?: string
}

interface NormalTextProps extends StyleProps {
  text: string
  onClick?: () => void
}

const Container = styled.p<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '22px')};
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
`

const NormalTextViewer = ({
  className,
  fontSize,
  text,
  onClick,
  fontColor,
}: NormalTextProps) => {
  return (
    <Container
      className={className}
      fontColor={fontColor}
      fontSize={fontSize}
      onClick={onClick}
    >
      {text}
    </Container>
  )
}

export default NormalTextViewer
