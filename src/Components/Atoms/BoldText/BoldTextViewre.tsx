import React from 'react'
import styled from 'styled-components'

interface IBoldTextStyle {
  className: string
  fontSize: string
}

interface IBoldText extends IBoldTextStyle {
  text: string
}

const Container = styled.span`
  font-weight: bold;
  font-size: ${(props: IBoldTextStyle) =>
    props.fontSize ? props.fontSize : '22px'};
`

const BoldTextViewer = ({ className, fontSize, text }: IBoldText) => {
  return (
    <Container className={className} fontSize={fontSize}>
      {text}
    </Container>
  )
}

export default BoldTextViewer
