import React from 'react'
import styled from 'styled-components'

interface INormalTextStyle {
  className?: string
  fontSize: string
}

interface INormalText extends INormalTextStyle {
  text: string
}

const Container = styled.h3`
  font-weight: normal;
  font-size: ${(props: INormalTextStyle) =>
    props.fontSize ? props.fontSize : '22px'};
`

const NormalTextViewer = ({ className, fontSize, text }: INormalText) => {
  return (
    <Container className={className} fontSize={fontSize}>
      {text}
    </Container>
  )
}

export default NormalTextViewer
