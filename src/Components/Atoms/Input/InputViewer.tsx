import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 22px 10px;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 18px;
  input::placeholder {
    color: #cccccc;
  }
`

const InputViewer = () => {
  return <Input />
}

export default InputViewer
