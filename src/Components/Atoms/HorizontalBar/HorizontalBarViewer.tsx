import React from 'react'
import styled from 'styled-components'

const HorizontalBar = styled.hr`
  border-top: 1px;
  margin: 0px;
  width: 100%;
  color: ${(props: IHorizontalBar) => (props.color ? props.color : '#e6e6e6')};
`

interface IHorizontalBar {
  className?: string
  color?: string
}

const HorizontalBarViewer = ({ color }: IHorizontalBar) => {
  return <HorizontalBar color={color} />
}

export default HorizontalBarViewer
