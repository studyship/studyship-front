import React from 'react'
import styled from 'styled-components'
import { IHomeTemplate } from './types'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1568px;
  @media screen and (max-width: 1919px) {
    width: 1176px;
  }
  @media screen and (max-width: 450px) {
    padding: 0px 10px;
  }
`

const HomeTemplateViewer = ({ children }: IHomeTemplate) => {
  return <Container>{children}</Container>
}

export default HomeTemplateViewer
