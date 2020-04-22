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
  onClick?: () => void
}

const ButtonViewer = ({ className, text, onClick }: TButton) => {
  return (
    <Button className={className} onClick={onClick}>
      {text}
    </Button>
  )
}

export default ButtonViewer
