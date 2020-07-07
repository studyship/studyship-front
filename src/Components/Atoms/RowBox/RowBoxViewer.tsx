import React from 'react'
import styled from 'styled-components'
import { marginStyles, paddingStyles } from 'src/styles/mixin'
import { MarginStyleProps, PaddingStyleProps } from 'src/@types'

const RowBox = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${marginStyles}
  ${paddingStyles}
`

interface StyleProps extends MarginStyleProps, PaddingStyleProps {}

interface RowBoxProps extends StyleProps {
  className?: string
  children: React.ReactNode
}
const RowBoxViewer = ({
  className,
  children,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: RowBoxProps) => {
  return (
    <RowBox
      className={className}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      {children}
    </RowBox>
  )
}

export default RowBoxViewer
