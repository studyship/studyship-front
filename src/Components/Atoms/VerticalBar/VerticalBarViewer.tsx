import React from 'react'
import styled from 'styled-components'

type VerticalBarProps = {
  marginHorizontal?: string
  bgColor?: string
  width?: string
}

const VerticalBar = styled.span`
  ${(props: VerticalBarProps) =>
    props.marginHorizontal && `margin: 0px ${props.marginHorizontal}`};
  color: ${(props: VerticalBarProps) =>
    props.bgColor ? props.bgColor : 'black'};
  width: ${(props: VerticalBarProps) => (props.width ? props.width : '1px')};
`
const VerticalBarViewer = ({ marginHorizontal }: VerticalBarProps) => {
  return <VerticalBar marginHorizontal={marginHorizontal}>|</VerticalBar>
}

export default VerticalBarViewer
