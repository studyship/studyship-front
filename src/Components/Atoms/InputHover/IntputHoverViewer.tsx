import React from 'react'
import styled from 'styled-components'
import { SearchOutlined } from '@ant-design/icons'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  :hover {
    input {
      display: flex;
      width: 100px;
    }
  }
`
const Input = styled.input`
  width: 1px;
  height: 30px;
  padding-left: 10px;
  margin: 0px;
  background: transparent;
  font-size: 14px;
  border: none;
  :focus {
    outline: none;
    display: flex;
    width: 100px;
  }
  transition: 0.5s;
`
const IconBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`

const IntputHoverViewer = () => {
  return (
    <Container>
      <IconBox>
        <SearchOutlined />
      </IconBox>
      <Input placeholder="통합검색" />
    </Container>
  )
}

export default IntputHoverViewer
