import React from 'react'
import styled from 'styled-components'
import { Introduce, Content } from 'src/Components/Molecules'
import FadeIn from 'react-fade-in'

const Container = styled.div``

const HomeViewer = () => {
  return (
    <FadeIn delay={100}>
      <Container>
        {/* header */}

        {/* banner */}
        <Introduce />
        <Content />
      </Container>
    </FadeIn>
  )
}

export default HomeViewer
