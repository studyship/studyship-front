import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Icon } from '..'
import { PaddingStyleProps, MarginStyleProps } from 'src/@types'
import { paddingStyles, marginStyles } from 'src/styles/mixin'

const Button = styled.button<StyleProps>`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 14px 0px;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  white-space: nowrap;
  border-radius: 5px;
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
  font-size: ${({ fontSize }) => fontSize ?? '15px'};
  color: ${({ fontColor }) => fontColor ?? '#ffffff'};
  background-color: ${({ bgColor }) => bgColor ?? bgColor};
  border-color: transparent;
  outline: none;
  cursor: pointer;
  ${paddingStyles}
  ${marginStyles};
  :hover {
    background-color: ${({ hoverColor }) => hoverColor && hoverColor};
  }
`
const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > :nth-child(1) {
    margin-right: 15px;
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

// eslint-disable-next-line react/display-name
const ButtonViewer = ({
  className,
  width,
  height,
  text,
  onClick,
  fontSize,
  fontColor,
  bgColor,
  imgSrc,
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
      {imgSrc ? (
        <RowBox>
          <Icon imgSrc={imgSrc} />
          {text}
        </RowBox>
      ) : (
        text
      )}
    </Button>
  )
}

export default ButtonViewer
