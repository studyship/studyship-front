import React from 'react'
import styled from 'styled-components'
import { Icon } from '..'
import { PaddingStyleProps, MarginStyleProps } from 'src/@types'
import { paddingStyles, marginStyles } from 'src/styles/mixin'

const Button = styled.button<StyleProps>`
  padding: 14px 0px;
  width: 100%;
  white-space: nowrap;
  text-align: center;
  vertical-align: center;
  border-radius: 5px;
  font-weight: normal;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  color: ${({ fontColor }) => (fontColor ? fontColor : '#ffffff')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : bgColor)};
  border-color: transparent;
  outline: none;
  cursor: pointer;
  ${paddingStyles}
  ${marginStyles};
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
}
interface ButtonProps extends StyleProps {
  className?: string
  text: string
  onClick?: () => void
  imgSrc?: string
}

const ButtonViewer = ({
  className,
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
}: ButtonProps) => {
  return (
    <Button
      className={className}
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
