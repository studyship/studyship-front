import React from 'react'
import styled from 'styled-components'
import { PaddingStyleProps, MarginStyleProps } from 'src/@types'
import { paddingStyles, marginStyles } from 'src/styles/mixin'

const Button = styled.button<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  white-space: nowrap;
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
  font-size: ${({ fontSize }) => fontSize ?? '15px'};
  color: ${({ fontColor }) => fontColor ?? '#6C6B6B'};
  background-color: ${({ bgColor }) => bgColor ?? '#fff'};
  border: 1px solid #b3b3b3;
  outline: none;
  cursor: pointer;
  ${paddingStyles}
  ${marginStyles};
  :hover {
    background-color: ${({ hoverColor }) => hoverColor && hoverColor};
  }
`

interface StyleProps extends MarginStyleProps, PaddingStyleProps {
  fontSize?: string
  fontColor?: string
  bgColor?: string
  width?: string
  height?: string
  hoverColor?: string
  fontWeight?: string
}
interface ButtonProps extends StyleProps {
  className?: string
  text?: string
  onClick?: () => void
  imgSrc?: string
}

const AngularButton = ({
  className,
  width,
  height,
  text,
  onClick,
  fontSize,
  fontColor,
  bgColor,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  fontWeight,
}: ButtonProps) => {
  return (
    <Button
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      fontSize={fontSize}
      fontColor={fontColor}
      bgColor={bgColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      fontWeight={fontWeight}
    >
      {text}
    </Button>
  )
}

export default AngularButton
