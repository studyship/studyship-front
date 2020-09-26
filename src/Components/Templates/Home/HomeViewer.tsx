import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

type HomeProps = {
  children: React.ReactNode
}

const HomeViewer = ({ children }: HomeProps) => {
  return <Container>{children}</Container>
}

export default HomeViewer
