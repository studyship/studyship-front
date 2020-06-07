import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

export interface ISectionTemplate {
  children: React.ReactNode
}

const SectionViewer = ({ children }: ISectionTemplate) => {
  return <Container>{children}</Container>
}

export default SectionViewer
