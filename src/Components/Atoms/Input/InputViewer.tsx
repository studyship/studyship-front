import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 8px 16px;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  font-size: 15px;
  outline: none;
  ::placeholder {
    color: #e6e6e6;
  }
`

type TInput = {
  placeholder: string
}

const InputViewer = ({ placeholder }: TInput) => {
  return <Input placeholder={placeholder} />
}

export default InputViewer
