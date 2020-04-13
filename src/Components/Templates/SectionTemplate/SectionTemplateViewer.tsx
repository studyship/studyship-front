import React from 'react'
import styled from 'styled-components'
import { ISectionTemplate } from './types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

const SectionTemplateViewer = ({ children }: ISectionTemplate) => {
  return <Container>{children}</Container>
}

export default SectionTemplateViewer
