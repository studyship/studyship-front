import React from 'react'
import styled from 'styled-components'
import { Icon } from '..'

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

interface IButtonStyle {
  fontSize?: string
  fontColor?: string
  bgColor?: string
}
interface IButton extends IButtonStyle {
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
}: IButton) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      fontSize={fontSize}
      fontColor={fontColor}
      bgColor={bgColor}
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
