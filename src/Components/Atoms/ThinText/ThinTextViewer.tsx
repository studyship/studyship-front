import React from 'react'
import styled from 'styled-components'

interface IThinTextStyle {
  className?: string
  fontSize: string
}

interface IThinText extends IThinTextStyle {
  text: string
}

const Container = styled.h4`
  font-weight: 300;
  font-size: ${(props: IThinTextStyle) =>
    props.fontSize ? props.fontSize : '22px'};
`

const ThinTextViewer = ({ className, fontSize, text }: IThinText) => {
  return (
    <Container className={className} fontSize={fontSize}>
      {text}
    </Container>
  )
}

export default ThinTextViewer
