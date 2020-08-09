import React from 'react'
import styled from 'styled-components'
import { MarginStyleProps, PaddingStyleProps } from 'src/@types'
import { marginStyles, paddingStyles } from 'src/styles/mixin'

const Container = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
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

interface ColumnBoxProps extends StyleProps {
  className?: string
  children: React.ReactNode
}

const ColumnBoxViewer = ({
  className,
  children,
  width,
  height,
  borderRadius,
  border,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  bgColor,
}: ColumnBoxProps) => {
  return (
    <Container
      className={className}
      width={width}
      height={height}
      borderRadius={borderRadius}
      border={border}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      bgColor={bgColor}
    >
      {children}
    </Container>
  )
}

export default ColumnBoxViewer
