import React from 'react'
import styled from 'styled-components'

const Container = styled.h1`
  font-weight: ${(props: StyleProps) =>
    props.type !== 'thin' ? props.type : '300'};
  font-size: ${(props: StyleProps) => (props.size ? props.size : '22px')};
`

interface StyleProps {
  type: 'bold' | 'normal' | 'thin'
  size?: string
}
interface TitleProps extends StyleProps {
  text: string
  className?: string
}

const TitleViewer = ({ className, text, type, size }: TitleProps) => {
  return (
    <Container className={className} type={type} size={size}>
      {text}
    </Container>
  )
}

export default TitleViewer
