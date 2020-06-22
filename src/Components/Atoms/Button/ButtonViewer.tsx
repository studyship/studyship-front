import React from 'react'
import styled from 'styled-components'
import { Icon } from '..'
import { PaddingStyleProps } from 'src/@types'

const Button = styled.button<StyleProps>`
  padding: 14px 0px;
  width: 100%;
  white-space: nowrap;
  text-align: center;
  vertical-align: center;
  border-radius: 5px;
  font-weight: normal;
  padding-top: ${({ paddingTop }) => paddingTop && paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom && paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft && paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight && paddingRight};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  color: ${({ fontColor }) => (fontColor ? fontColor : '#ffffff')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : bgColor)};
  border-color: transparent;
  outline: none;
  cursor: pointer;
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

interface StyleProps extends PaddingStyleProps {
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
