import React from 'react'
import styled from 'styled-components'
import { MarginStyleProps } from 'src/@types'
import { marginStyles } from 'src/styles/mixin'

const HorizontalBar = styled.hr<HorizontalBarProps>`
  border: none;
  margin: 0px;
  width: 100%;
  height: 1px;
  color: ${({ color }) => (color ? color : '#e6e6e6')};
  ${marginStyles};
`

interface HorizontalBarProps extends MarginStyleProps {
  color?: string
  className?: string
}

const HorizontalBarViewer = ({
  className,
  color,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  margin,
}: HorizontalBarProps) => {
  return (
    <HorizontalBar
      className={className}
      color={color}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      margin={margin}
    />
  )
}

export default HorizontalBarViewer
