import React from 'react'
import styled from 'styled-components'
import { Introduce, Content, IntroSection } from 'src/Components/Molecules'
import FadeIn from 'react-fade-in'
import { HomeTemplate } from 'src/Components/App/Templates'

const Container = styled.div``

const HomeViewer = () => {
  return (
    <HomeTemplate>
      <FadeIn delay={100}>
        <Container>
          {/* header */}

          {/* banner */}
          <IntroSection />
          <Introduce />
          <Content />
        </Container>
      </FadeIn>
    </HomeTemplate>
  )
}

export default HomeViewer
