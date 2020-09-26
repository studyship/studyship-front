import React from 'react'
import styled from 'styled-components'
import { HomeTemplate, SectionTemplate } from 'src/Components/Templates'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background: url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'); */
  background-color: yellow;
`
const H1 = styled.h1`
  font-size: 30px;
`

const IntroSectionViewer = () => {
  return (
    <SectionTemplate>
      <Container>
        <HomeTemplate>
          <H1>공사중</H1>
        </HomeTemplate>
      </Container>
    </SectionTemplate>
  )
}

export default IntroSectionViewer
