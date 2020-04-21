import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  padding: 14px 0px;
  width: 100%;
  text-align: center;
  vertical-align: center;
  border-radius: 5px;
  font-size: 16px;
  color: white;
`

type TButton = {
  className?: string
  text: string
}

const ButtonViewer = ({ className, text }: TButton) => {
  return <Button className={className}>{text}</Button>
}

export default ButtonViewer
