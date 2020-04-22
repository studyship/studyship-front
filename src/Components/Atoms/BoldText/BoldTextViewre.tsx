import React from 'react'
import styled from 'styled-components'

interface IBoldTextStyle {
  className?: string
  fontSize: string
}

interface IBoldText extends IBoldTextStyle {
  text: string
  onClick?: () => void
}

const Container = styled.h2`
  font-weight: bold;
  font-size: ${(props: IBoldTextStyle) =>
    props.fontSize ? props.fontSize : '22px'};
`

const BoldTextViewer = ({ className, fontSize, text, onClick }: IBoldText) => {
  return (
    <Container className={className} fontSize={fontSize} onClick={onClick}>
      {text}
    </Container>
  )
}

export default BoldTextViewer
