import React from 'react'
import styled from 'styled-components'
import { JumboTitle, Title } from 'src/Components/Atoms'

const Banner = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
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
        <Title text="제목 텍스트" type="bold" />
      </JumboTitle>
    </Banner>
  )
}

export default IntroduceViewer
