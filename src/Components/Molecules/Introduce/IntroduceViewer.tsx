import React from 'react'
import styled from 'styled-components'
import { JumboTitle, Title } from 'src/Components/Atoms'

const Banner = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'); */
  background-color: #f0f0ed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IntroduceViewer = () => {
  return (
    <Banner>
      <JumboTitle>
        <Title />
      </JumboTitle>
    </Banner>
  )
}

export default IntroduceViewer
