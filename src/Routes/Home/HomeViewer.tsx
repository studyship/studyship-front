import React from 'react'
import styled from 'styled-components'
import { Content, IntroSection, CardsSection } from 'src/Components/Molecules'
import { MediaSize } from 'src/Components/Templates'

const Container = styled.div``

const HomeViewer = () => {
  return (
    <MediaSize>
      <Container>
        {/* banner */}
        <IntroSection />
        <CardsSection />
        {/* <Introduce /> */}
        <Content />
      </Container>
    </MediaSize>
  )
}

export default HomeViewer
