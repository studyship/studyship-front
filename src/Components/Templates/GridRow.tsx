import React from 'react'
import { PaddingStyleProps } from 'src/@types'
import styled from 'styled-components'

const Row = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: ${({ gridColumns }) =>
    gridColumns ?? '1.5fr 3fr 1fr 1fr'};
  align-content: center;
  justify-items: flex-start;
  padding: 0px 20px;
  height: 64px;
  border-bottom: 1px solid #e6e6e6;
  :last-child {
    border: none;
  }
`

interface StyleProps extends PaddingStyleProps {
  gridColumns?: string
  height?: string
}
interface GridRowProps extends StyleProps {
  children: React.ReactNode
}
const GridRow = ({
  children,
  gridColumns,
  height,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: GridRowProps) => {
  return (
    <Row
      gridColumns={gridColumns}
      height={height}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      {children}
    </Row>
  )
}

export default GridRow
