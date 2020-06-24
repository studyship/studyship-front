import React from 'react'
import styled from 'styled-components'
import { MarginStyleProps } from 'src/@types'
import { marginStyles } from 'src/styles/mixin'

const HorizontalBar = styled.hr<HorizontalBarProps>`
  border-top: 1px;
  margin: 0px;
  width: 100%;
  color: ${({ color }) => (color ? color : '#e6e6e6')};
  ${marginStyles};
`

interface HorizontalBarProps extends MarginStyleProps {
  color?: string
}

const HorizontalBarViewer = ({
  color,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}: HorizontalBarProps) => {
  return (
    <HorizontalBar
      color={color}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  )
}

export default HorizontalBarViewer
