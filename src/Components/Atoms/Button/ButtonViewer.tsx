import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 14px 0px;
  width: 100%;
  text-align: center;
  vertical-align: center;
  border-radius: 5px;
  font-size: 16px;
  font-weight: normal;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`

type TButton = {
  className?: string
  text: string
}

const ButtonViewer = ({ className, text }: TButton) => {
  return <Button className={className}>{text}</Button>
}

export default ButtonViewer
