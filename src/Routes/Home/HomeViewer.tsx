import React from 'react'
import styled from 'styled-components'
import { Header, Introduce } from 'src/Components/Molecules'

const Container = styled.div``

interface IHome {
  screenHeight: boolean
}

const HomeViewer = ({ screenHeight }: IHome) => {
  return (
    <Container>
      {/* header */}
      <Header screenHeight={screenHeight} />

      {/* banner */}
      <Introduce />
    </Container>
  )
}

export default HomeViewer
