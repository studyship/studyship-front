import React from 'react'
import styled from 'styled-components'
import { marginStyles, paddingStyles } from 'src/styles/mixin'
import { MarginStyleProps, PaddingStyleProps } from 'src/@types'

const RowBox = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${marginStyles};
  ${paddingStyles};
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  border: ${({ border }) => border ?? 'none'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0px'};
  background-color: ${({ bgColor }) => bgColor ?? 'tranparent'};
`

interface StyleProps extends MarginStyleProps, PaddingStyleProps {
  width?: string
  height?: string
  borderRadius?: string
  border?: string
  bgColor?: string
}

interface RowBoxProps extends StyleProps {
  className?: string
  children: React.ReactNode
}
const RowBoxViewer = ({ children, ...props }: RowBoxProps) => {
  return <RowBox {...props}>{children}</RowBox>
}

export default RowBoxViewer
