import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1570px;
  @media screen and (max-width: 1313px) {
    width: 1180px;
  }
  @media screen and (max-width: 450px) {
    padding: 0px 10px;
  }
`

type HomeProps = {
  children: React.ReactNode
}

const HomeViewer = ({ children }: HomeProps) => {
  return <Container>{children}</Container>
}

export default HomeViewer
