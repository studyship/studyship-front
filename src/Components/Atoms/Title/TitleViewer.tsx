import React from 'react'
import styled from 'styled-components'
import { ITitle, IFontStyles } from './types'

const Container = styled.span`
  font-weight: ${(props: IFontStyles) =>
    props.type !== 'thin' ? props.type : '300'};
  font-size: ${(props: IFontStyles) => (props.size ? props.size : '22px')};
`

const TitleViewer = ({ className, text, type, size }: ITitle) => {
  return (
    <Container className={className} type={type} size={size}>
      {text}
    </Container>
  )
}

export default TitleViewer
