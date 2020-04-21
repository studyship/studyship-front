import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 10px 21px;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  input::placeholder {
    color: #cccccc;
  }
`

type TInput = {
  placeholder: string
}

const InputViewer = ({ placeholder }: TInput) => {
  return <Input placeholder={placeholder} />
}

export default InputViewer
