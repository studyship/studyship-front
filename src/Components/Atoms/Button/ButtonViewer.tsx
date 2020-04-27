import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 14px 0px;
  width: 100%;
  white-space: nowrap;
  text-align: center;
  vertical-align: center;
  border-radius: 5px;
  font-weight: normal;
  font-size: ${(props: IButtonStyle) =>
    props.fontSize ? props.fontSize : '15px'};
  color: ${(props: IButtonStyle) =>
    props.fontColor ? props.fontColor : '#ffffff'};
  background-color: ${(props: IButtonStyle) =>
    props.bgColor ? props.bgColor : props.bgColor};
  border: none;
  outline: none;
  cursor: pointer;
`

interface IButtonStyle {
  fontSize?: string
  fontColor?: string
  bgColor?: string
}
interface IButton extends IButtonStyle {
  className?: string
  text: string
  onClick?: () => void
}

const ButtonViewer = ({
  className,
  text,
  onClick,
  fontSize,
  fontColor,
  bgColor,
}: IButton) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      fontSize={fontSize}
      fontColor={fontColor}
      bgColor={bgColor}
    >
      {text}
    </Button>
  )
}

export default ButtonViewer
