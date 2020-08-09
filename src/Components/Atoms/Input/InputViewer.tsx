import React from 'react'
import styled from 'styled-components'
import { MarginStyleProps } from 'src/@types'

const Input = styled.input<StyleProps>`
  font-size: 15px;
  outline: none;
  ::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? '#e6e6e6'};
  }
  width: ${({ width }) => width ?? '100%'};
  border: ${({ border }) => border ?? '1px solid #e6e6e6'};
  color: ${({ color }) => color ?? 'black'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '5px'};
  padding: ${({ padding }) => padding ?? '8px 16px'};
`

interface StyleProps extends MarginStyleProps {
  width?: string
  border?: string
  color?: string
  placeholderColor?: string
  borderRadius?: string
  padding?: string
}

interface InputProps extends StyleProps {
  className?: string
  placeholder: string
}

const InputViewer = ({
  placeholder,
  className,
  width,
  border,
  color,
  placeholderColor,
  borderRadius,
  padding,
}: InputProps) => {
  return (
    <Input
      className={className}
      placeholder={placeholder}
      width={width}
      border={border}
      color={color}
      placeholderColor={placeholderColor}
      borderRadius={borderRadius}
      padding={padding}
    />
  )
}

export default InputViewer
