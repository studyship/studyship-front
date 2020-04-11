import React from 'react'
import styled from 'styled-components'
import { IHomeTemplate } from './types'

const Container = styled.div`
  padding: 0px 160px;
`

const HomeTemplateViewer = ({ children }: IHomeTemplate) => {
  return <Container>{children}</Container>
}

export default HomeTemplateViewer
