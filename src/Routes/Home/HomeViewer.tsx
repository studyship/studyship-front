import React from 'react'
import styled from 'styled-components'
import { Content, IntroSection, CardsSection } from 'src/Components/Molecules'
import FadeIn from 'react-fade-in'

const Container = styled.div``

const HomeViewer = () => {
  return (
    <FadeIn delay={100}>
      <Container>
        {/* banner */}
        <IntroSection />
        <CardsSection />
        {/* <Introduce /> */}
        <Content />
      </Container>
    </FadeIn>
  )
}

export default HomeViewer
