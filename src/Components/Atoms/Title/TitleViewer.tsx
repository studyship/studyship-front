import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  font-weight: bold;
  font-size: 22px;
`

interface ITitle {
  text: string
}

const TitleViewer = ({ text }: ITitle) => {
  return <Container>{text}</Container>
}

export default TitleViewer
